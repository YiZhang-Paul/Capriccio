import type { NoteName } from '@/enums/note-name.enum';
import type { OctaveRegister } from '@/enums/octave-register.enum';
import type { Accidental } from '@/enums/accidental.enum';
import type { NoteValue } from '@/enums/note-value.enum';

export abstract class Note {
    public name: NoteName;
    public octave: OctaveRegister;
    public accidental: Accidental;
    public value: NoteValue;

    constructor(name: NoteName, octave: OctaveRegister, accidental: Accidental, value: NoteValue) {
        this.name = name;
        this.octave = octave;
        this.accidental = accidental;
        this.value = value;
    }
}
