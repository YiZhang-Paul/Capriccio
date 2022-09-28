import type { NoteName } from '@/enums/note-name.enum';
import type { OctaveRegister } from '@/enums/octave-register.enum';
import { NoteValue } from '@/enums/note-value.enum';

import { Note } from './note';

export class WholeNote extends Note {

    constructor(name: NoteName, octave: OctaveRegister) {
        super(name, octave, NoteValue.Whole);
    }
}
