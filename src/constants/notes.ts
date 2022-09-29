import { WholeNote } from '@/models/music-sheet/notes/whole-note';
import { StringNoteRange } from '@/models/music-sheet/generic/string-note-range';
import { NoteName } from '@/enums/note-name.enum';
import { StringName } from '@/enums/string-name.enum';
import { OctaveRegister } from '@/enums/octave-register.enum';

export const allNotes = [
    NoteName.C,
    NoteName.D,
    NoteName.E,
    NoteName.F,
    NoteName.G,
    NoteName.A,
    NoteName.B
];

export const stringNoteRanges = {
    [StringName.G]: new StringNoteRange(
        new WholeNote(NoteName.G, OctaveRegister.Third),
        new WholeNote(NoteName.F, OctaveRegister.Fourth),
        new WholeNote(NoteName.G, OctaveRegister.Fifth)
    ),
    [StringName.D]: new StringNoteRange(
        new WholeNote(NoteName.D, OctaveRegister.Fourth),
        new WholeNote(NoteName.C, OctaveRegister.Fifth),
        new WholeNote(NoteName.D, OctaveRegister.Sixth)
    ),
    [StringName.A]: new StringNoteRange(
        new WholeNote(NoteName.A, OctaveRegister.Fourth),
        new WholeNote(NoteName.G, OctaveRegister.Fifth),
        new WholeNote(NoteName.A, OctaveRegister.Sixth)
    ),
    [StringName.E]: new StringNoteRange(
        new WholeNote(NoteName.E, OctaveRegister.Fifth),
        new WholeNote(NoteName.D, OctaveRegister.Sixth),
        new WholeNote(NoteName.E, OctaveRegister.Seventh)
    )
};
