import type { KeySignatureName } from '@/enums/key-signature-name.enum';
import type { Accidental } from '@/enums/accidental.enum';
import type { NoteName } from '@/enums/note-name.enum';

export class KeySignature {
    public name: KeySignatureName;
    public accidental: Accidental;
    public notes: Set<NoteName>;

    constructor(name: KeySignatureName, accidental: Accidental, notes = new Set<NoteName>()) {
        this.name = name;
        this.accidental = accidental;
        this.notes = notes;
    }
}
