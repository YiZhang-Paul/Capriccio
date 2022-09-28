import { beforeEach, describe, expect, test } from 'vitest';

import { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { EighthNote } from '@/models/music-sheet/notes/eighth-note';
import { HalfNote } from '@/models/music-sheet/notes/half-note';
import { NoteName } from '@/enums/note-name.enum';
import { OctaveRegister } from '@/enums/octave-register.enum';
import { Accidental } from '@/enums/accidental.enum';
import { KeySignatureName } from '@/enums/key-signature-name.enum';

import { MusicSheetService } from './music-sheet.service';

describe('music sheet service unit test', () => {
    let service: MusicSheetService;

    beforeEach(() => {
        service = new MusicSheetService();
    });

    describe('overrideAccidentals', () => {
        let sheet: SheetDescriptor;

        beforeEach(() => {
            sheet = new SheetDescriptor(KeySignatureName.DMajor);
        });

        test('should apply accidentals specified explicitly', () => {
            const expected = [
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                Accidental.Sharp,
                undefined,
                undefined,
                Accidental.Flat,
                undefined,
                undefined
            ];

            sheet.measureDescriptors = [
                {
                    noteDescriptors: [
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Sharp)),
                        new NoteDescriptor(new EighthNote(NoteName.D, OctaveRegister.Fourth)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fourth)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Natural)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Flat)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth))
                    ]
                },
                {
                    noteDescriptors: [
                        new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth)),
                        new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth, Accidental.Sharp))
                    ]
                }
            ];

            service.overrideAccidentals(sheet);

            expect(sheet.measureDescriptors.map(_ => _.noteDescriptors).flat().map(_ => _.override.accidental)).toEqual(expected);
        });

        test('should apply accidentals from key signature', () => {
            const expected = [
                Accidental.Sharp,
                Accidental.Sharp,
                undefined,
                undefined,
                Accidental.Sharp,
                Accidental.Sharp,
                undefined,
                undefined,
                undefined,
                Accidental.Sharp
            ];

            sheet.measureDescriptors = [
                {
                    noteDescriptors: [
                        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
                        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
                        new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth, Accidental.Natural)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
                        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth)),
                        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fourth)),
                        new NoteDescriptor(new EighthNote(NoteName.F, OctaveRegister.Fifth, Accidental.Flat)),
                        new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth))
                    ]
                },
                {
                    noteDescriptors: [
                        new NoteDescriptor(new HalfNote(NoteName.E, OctaveRegister.Fifth)),
                        new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fifth))
                    ]
                }
            ];

            service.overrideAccidentals(sheet);

            expect(sheet.measureDescriptors.map(_ => _.noteDescriptors).flat().map(_ => _.override.accidental)).toEqual(expected);
        });
    });
});
