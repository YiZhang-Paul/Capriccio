import type { NoteName } from '@/enums/note-name.enum';
import type { OctaveRegister } from '@/enums/octave-register.enum';
import { Accidental } from '@/enums/accidental.enum';
import { NoteValue } from '@/enums/note-value.enum';

import { Note } from './note';

export class EighthNote extends Note {

    constructor(name: NoteName, octave: OctaveRegister, accidental = Accidental.None) {
        super(name, octave, accidental, NoteValue.Eighth);
    }
}
