import { Part, Synth, Time, Transport } from 'tone';

import type { Note } from '@/models/music-sheet/notes/note';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { ToneOption } from '@/models/playback/options/tone-option';
import { PlaybackInstruction } from '@/models/playback/playback-instruction';
import { NoteValue } from '@/enums/note-value.enum';
import { Accidental } from '@/enums/accidental.enum';

import { ToneService } from '../tone/tone.service';

const toneService = new ToneService();

export class PlaybackService {

    public play(sheet: SheetDescriptor): void {
        this.stop();
        const synths = toneService.initialize(2);
        const instructionSets = this.getInstructionSets(sheet);
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
        toneService.configure(synth, toneOption);
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
}
