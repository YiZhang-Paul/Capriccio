import { Part, Synth, Time, Transport, Vibrato, type SynthOptions } from 'tone';

import type { Note } from '@/models/music-sheet/notes/note';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { ToneOption } from '@/models/playback/options/tone-option';
import { EffectAggregate } from '@/models/playback/effect-aggregate';
import { PlaybackInstruction } from '@/models/playback/playback-instruction';
import { NoteValue } from '@/enums/note-value.enum';
import { Accidental } from '@/enums/accidental.enum';
import { StringName } from '@/enums/string-name.enum';
import { VibratoType } from '@/enums/vibrato-type.enum';

let synths: Synth[] = [];

export class PlaybackService {
    private effects = new EffectAggregate();

    public play(sheet: SheetDescriptor): void {
        const instructionSets = this.getInstructionSets(sheet);
        this.stop();

        if (!synths.length) {
            const option = { oscillator: { spread: 30 } } as SynthOptions;
            synths = [new Synth(option).toDestination(), new Synth(option).toDestination()];
        }

        const even = instructionSets.filter((_, index) => index % 2 === 0);
        const odd = instructionSets.filter((_, index) => index % 2 === 1);
        new Part((time, instruction) => this.processInstruction(synths[0], time, instruction), even).start(0);
        new Part((time, instruction) => this.processInstruction(synths[1], time, instruction), odd).start(0);
        Transport.start();
        Transport.bpm.value = sheet.tempo;
    }

    public stop(): void {
        if (Transport.state !== 'stopped') {
            Transport.stop();
        }

        synths.forEach(_ => _.dispose());
        synths = [];
    }

    private getInstructionSets(sheet: SheetDescriptor): [string, PlaybackInstruction<Note>][] {
        let beats = 0;
        const sets: [string, PlaybackInstruction<Note>][] = [];
        const noteDescriptors = sheet.measureDescriptors.map(_ => _.noteDescriptors).flat();

        for (const noteDescriptor of noteDescriptors) {
            const instruction = new PlaybackInstruction(noteDescriptor, new ToneOption());
            const { base, option } = noteDescriptor;
            const multiplier = new Array(option.dots ?? 0).fill(0).reduce((total, _, index) => total + Math.pow(0.5, index + 1), 1);
            sets.push([`0:${beats}`, instruction]);
            beats += NoteValue.Quarter / base.value * multiplier;
        }

        return sets;
    }

    private processInstruction(synth: Synth, time: number, instruction: PlaybackInstruction<Note>): void {
        const { noteDescriptor, toneOption } = instruction;
        // add overlap between notes for smoother transition
        const duration = Time(this.getNoteDurationString(noteDescriptor)).toSeconds() + 0.05;
        synth.triggerAttackRelease(this.getNoteDisplayString(noteDescriptor), duration, time);
        this.configureTone(synth, toneOption);
    }

    private getNoteDisplayString(noteDescriptor: NoteDescriptor<Note>): string {
        const { base, override } = noteDescriptor;
        const accidental = override.accidental ?? base.accidental;
        const isNatural = accidental === Accidental.Natural || accidental === Accidental.None;

        return `${base.name}${isNatural ? '' : accidental}${base.octave}`;
    }

    private getNoteDurationString(noteDescriptor: NoteDescriptor<Note>): string {
        const { base, option } = noteDescriptor;
        const dots = '.'.repeat(option.dots ?? 0);

        return `${base.value}n${dots}`;
    }

    private configureTone(synth: Synth, toneOption: ToneOption): void {
        const { string, vibrato } = toneOption;

        if (string === StringName.G) {
            synth.oscillator.type = 'amtriangle32';
            synth.oscillator.volume.value = 4;
        }
        else if (string === StringName.D) {
            synth.oscillator.type = 'amtriangle20';
            synth.oscillator.volume.value = 2;
        }
        else if (string === StringName.A) {
            synth.oscillator.type = 'amtriangle10';
            synth.oscillator.volume.value = 2;
        }
        else if (string === StringName.E) {
            synth.oscillator.type = 'amtriangle';
            synth.oscillator.volume.value = 3;
        }

        if (vibrato) {
            this.enableVibrato(synth, vibrato);
        }
        else {
            this.disableVibrato();
        }
    }

    private enableVibrato(synth: Synth, type: VibratoType): void {
        const configs = {
            [VibratoType.Wide]: { frequency: 6, depth: 0.025 },
            [VibratoType.Soft]: { frequency: 7.5, depth: 0.02 },
            [VibratoType.Narrow]: { frequency: 8.5, depth: 0.0015 }
        };

        this.disableVibrato();
        const { frequency, depth } = configs[type];
        this.effects.vibrato = new Vibrato(frequency, depth).toDestination();
        synth.fan(this.effects.vibrato);
    }

    private disableVibrato(): void {
        this.effects.vibrato?.dispose();
        this.effects.vibrato = null;
    }
}
