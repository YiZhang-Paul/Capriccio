import { Part, Synth, Time, Transport } from 'tone';

import type { Note } from '@/models/music-sheet/notes/note';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { ToneOption } from '@/models/playback/options/tone-option';
import { PlaybackInstruction } from '@/models/playback/playback-instruction';

import { NoteService } from '../note/note.service';
import { ToneService } from '../tone/tone.service';

const noteService = new NoteService();
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
            const option = new ToneOption(noteService.getDefaultString(noteDescriptor));
            sets.push([`0:${beats}`, new PlaybackInstruction(noteDescriptor, option)]);
            beats += noteService.getTotalBeats(noteDescriptor);
        }

        return sets;
    }

    private processInstruction(synth: Synth, time: number, instruction: PlaybackInstruction<Note>): void {
        const { noteDescriptor, toneOption } = instruction;
        const { base, option } = noteDescriptor;
        const dots = '.'.repeat(option.dots ?? 0);
        // add overlap between notes for smoother transition
        const duration = Time(`${base.value}n${dots}`).toSeconds() + 0.05;
        synth.triggerAttackRelease(noteService.getDisplayText(noteDescriptor), duration, time);
        toneService.configure(synth, toneOption);
    }
}
