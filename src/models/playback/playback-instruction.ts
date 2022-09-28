import type { NoteDescriptor } from '../music-sheet/descriptors/note-descriptor';
import type { Note } from '../music-sheet/notes/note';

import type { ToneOption } from './options/tone-option';

export class PlaybackInstruction<T extends Note> {
    public noteDescriptor: NoteDescriptor<T>;
    public toneOption: ToneOption;

    constructor(noteDescriptor: NoteDescriptor<T>, toneOption: ToneOption) {
        this.noteDescriptor = noteDescriptor;
        this.toneOption = toneOption;
    }
}
