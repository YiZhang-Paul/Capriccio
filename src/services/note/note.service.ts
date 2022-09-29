import type { Note } from '@/models/music-sheet/notes/note';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { NoteValue } from '@/enums/note-value.enum';
import { Accidental } from '@/enums/accidental.enum';

export class NoteService {

    public getDisplayText(noteDescriptor: NoteDescriptor<Note>): string {
        const { base, override } = noteDescriptor;
        const accidental = override.accidental ?? base.accidental;
        const isNatural = accidental === Accidental.Natural || accidental === Accidental.None;

        return `${base.name}${isNatural ? '' : accidental}${base.octave}`;
    }

    public getTotalBeats(noteDescriptor: NoteDescriptor<Note>): number {
        const { base, option } = noteDescriptor;
        const dots = option.dots ?? 0;
        const multiplier = new Array(dots).fill(null).reduce((total, _, index) => total + Math.pow(0.5, index + 1), 1);

        return NoteValue.Quarter / base.value * multiplier;
    }
}
