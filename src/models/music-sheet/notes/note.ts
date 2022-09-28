import type { NoteName } from '@/enums/note-name.enum';
import type { OctaveRegister } from '@/enums/octave-register.enum';
import type { NoteValue } from '@/enums/note-value.enum';

export abstract class Note {
    public name: NoteName;
    public octave: OctaveRegister;
    public value: NoteValue;

    constructor(name: NoteName, octave: OctaveRegister, value: NoteValue) {
        this.name = name;
        this.octave = octave;
        this.value = value;
    }
}
