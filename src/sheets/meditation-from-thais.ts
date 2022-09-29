import { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor'
import { MeasureDescriptor } from '@/models/music-sheet/descriptors/measure-descriptor';
import { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { WholeNote } from '@/models/music-sheet/notes/whole-note';
import { HalfNote } from '@/models/music-sheet/notes/half-note';
import { QuarterNote } from '@/models/music-sheet/notes/quarter-note';
import { EighthNote } from '@/models/music-sheet/notes/eighth-note';
import { SixteenthNote } from '@/models/music-sheet/notes/sixteenth-note';
import { KeySignatureName } from '@/enums/key-signature-name.enum'
import { NoteName } from '@/enums/note-name.enum';
import { OctaveRegister } from '@/enums/octave-register.enum';
import { Accidental } from '@/enums/accidental.enum';

export const sheet = new SheetDescriptor(KeySignatureName.DMajor, 77, [
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new HalfNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Sixth, Accidental.Natural)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Sixth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth, Accidental.Sharp))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Third)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Third)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Third)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new WholeNote(NoteName.D, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth, Accidental.Sharp)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fourth, Accidental.Flat)),
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth, Accidental.Natural))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Sixth, Accidental.Natural)),
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Sixth, Accidental.Natural), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Sixth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Sixth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Sixth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Sixth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth, Accidental.Sharp))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth, Accidental.Flat))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth, Accidental.Flat), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new HalfNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.C, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth, Accidental.Natural))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Sixth, Accidental.Natural)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Sixth)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Sixth, Accidental.Sharp)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth, Accidental.Sharp))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.B, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Third)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Third)),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Third)),
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new SixteenthNote(NoteName.A, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fifth), {}, { dots: 1 }),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Sixth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Sixth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.G, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.B, OctaveRegister.Fourth, Accidental.Flat)),
        new NoteDescriptor(new QuarterNote(NoteName.C, OctaveRegister.Fourth), {}, { dots: 1 })
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new SixteenthNote(NoteName.C, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new SixteenthNote(NoteName.E, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fourth)),
        new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fifth)),
        new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new WholeNote(NoteName.A, OctaveRegister.Sixth), {}, { dots: 1 }),
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new QuarterNote(NoteName.E, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth)),
        new NoteDescriptor(new WholeNote(NoteName.F, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth), {}, { dots: 1 }),
        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new EighthNote(NoteName.E, OctaveRegister.Fourth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fourth)),
        new NoteDescriptor(new HalfNote(NoteName.D, OctaveRegister.Fifth))
    ]),
    new MeasureDescriptor([
        new NoteDescriptor(new WholeNote(NoteName.A, OctaveRegister.Sixth), {}, { dots: 1 })
    ])
]);
