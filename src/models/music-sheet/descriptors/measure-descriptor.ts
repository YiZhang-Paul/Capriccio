import type { Note } from '../notes/note';

import type { NoteDescriptor } from './note-descriptor';

export class MeasureDescriptor {
    public noteDescriptors: NoteDescriptor<Note>[];

    constructor(noteDescriptors: NoteDescriptor<Note>[] = []) {
        this.noteDescriptors = noteDescriptors;
    }
}
