import { allNotes, stringNoteRanges } from '@/constants/notes';
import type { Note } from '@/models/music-sheet/notes/note';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { NoteValue } from '@/enums/note-value.enum';
import { Accidental } from '@/enums/accidental.enum';
import { StringName } from '@/enums/string-name.enum';
import { VibratoType } from '@/enums/vibrato-type.enum';

export class NoteService {

    public getDisplayText(noteDescriptor: NoteDescriptor<Note>): string {
        const { base, override } = noteDescriptor;
        const accidental = override.accidental ?? base.accidental;
        const isNatural = accidental === Accidental.Natural || accidental === Accidental.None;

        return `${base.name}${isNatural ? '' : accidental}${base.octave}`;
    }

    public getTotalBeats(noteDescriptor: NoteDescriptor<Note>, beatType: NoteValue): number {
        const { base, option } = noteDescriptor;
        const dots = option.dots ?? 0;
        const multiplier = new Array(dots).fill(null).reduce((total, _, index) => total + Math.pow(0.5, index + 1), 1);

        return beatType / base.value * multiplier;
    }

    public getDefaultString(noteDescriptor: NoteDescriptor<Note>): StringName {
        if (this.getRank(noteDescriptor.base) > this.getRank(stringNoteRanges.A.highest)) {
            return StringName.E;
        }

        const strings = Object.keys(stringNoteRanges) as StringName[];

        return strings.find(_ => {
            const { lowest, thirdPositionHighest } = stringNoteRanges[_];

            return this.containsNote(noteDescriptor.base, lowest, thirdPositionHighest);
        })!;
    }

    public getDefaultVibrato(noteDescriptor: NoteDescriptor<Note>): VibratoType | null {
        const { value } = noteDescriptor.base;

        if (value > NoteValue.Eighth) {
            return null;
        }

        if (value === NoteValue.Eighth) {
            return VibratoType.Narrow;
        }

        return value === NoteValue.Quarter ? VibratoType.Soft : VibratoType.Wide;
    }

    private getRank(note: Note): number {
        return (note.octave - 1) * allNotes.length + allNotes.indexOf(note.name) + 1;
    }

    private containsNote(current: Note, lowest: Note, highest: Note): boolean {
        const rank = this.getRank(current);

        return rank >= this.getRank(lowest) && rank <= this.getRank(highest);
    }
}
