import { beforeEach, describe, expect, test } from 'vitest';

import { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { EighthNote } from '@/models/music-sheet/notes/eighth-note';
import { QuarterNote } from '@/models/music-sheet/notes/quarter-note';
import { HalfNote } from '@/models/music-sheet/notes/half-note';
import { NoteName } from '@/enums/note-name.enum';
import { OctaveRegister } from '@/enums/octave-register.enum';
import { Accidental } from '@/enums/accidental.enum';
import { KeySignatureName } from '@/enums/key-signature-name.enum';

import { MusicSheetService } from './music-sheet.service';

describe('music sheet service unit test', () => {
    let service = new MusicSheetService();

    beforeEach(() => {
        service = new MusicSheetService();
    });

    describe(`${service.overrideAccidentals.name}`, () => {
        let sheet: SheetDescriptor;

        beforeEach(() => {
            sheet = new SheetDescriptor(KeySignatureName.DMajor);
        });

        describe('explicit accidentals', () => {
            test('should only override notes coming after', () => {
                const expected = [
                    [
                        undefined,
                        undefined,
                        Accidental.Sharp
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth)),
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth, Accidental.Sharp)),
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should only override notes with same pitch', () => {
                const expected = [
                    [
                        undefined,
                        undefined,
                        Accidental.Flat
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth, Accidental.Flat)),
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fourth)),
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should override notes with different accidentals', () => {
                const expected = [
                    [
                        undefined,
                        Accidental.Flat,
                        undefined,
                        Accidental.Natural,
                        undefined,
                        Accidental.Sharp
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Flat)),
                            new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
                            new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth, Accidental.Natural)),
                            new NoteDescriptor(new EighthNote(NoteName.A, OctaveRegister.Fifth)),
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth, Accidental.Sharp)),
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should only override notes within same measure', () => {
                const expected = [
                    [
                        undefined,
                        Accidental.Flat
                    ],
                    [
                        undefined,
                        undefined
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth, Accidental.Flat)),
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth))
                        ]
                    },
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth)),
                            new NoteDescriptor(new HalfNote(NoteName.A, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should override different notes with accidentals', () => {
                const expected = [
                    [
                        undefined,
                        Accidental.Flat,
                        undefined,
                        Accidental.Sharp
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth, Accidental.Flat)),
                            new NoteDescriptor(new QuarterNote(NoteName.A, OctaveRegister.Fifth)),
                            new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fifth, Accidental.Sharp)),
                            new NoteDescriptor(new QuarterNote(NoteName.B, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should take precedence over key signature', () => {
                const expected = [
                    [
                        undefined,
                        Accidental.Flat,
                        undefined,
                        Accidental.Natural
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fourth, Accidental.Flat)),
                            new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fourth)),
                            new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural)),
                            new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fourth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });
        });

        describe('key signature accidentals', () => {
            test('should not override affected notes when accidentals are specified explicitly', () => {
                const expected = [
                    [
                        undefined,
                        undefined
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new HalfNote(NoteName.C, OctaveRegister.Fourth, Accidental.Flat)),
                            new NoteDescriptor(new HalfNote(NoteName.F, OctaveRegister.Fourth, Accidental.Natural))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });

            test('should override affected notes regardless of pitch', () => {
                const expected = [
                    [
                        Accidental.Sharp,
                        Accidental.Sharp,
                        undefined,
                        Accidental.Sharp,
                        Accidental.Sharp
                    ]
                ];

                sheet.measureDescriptors = [
                    {
                        noteDescriptors: [
                            new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fourth)),
                            new NoteDescriptor(new EighthNote(NoteName.C, OctaveRegister.Fifth)),
                            new NoteDescriptor(new QuarterNote(NoteName.D, OctaveRegister.Fifth)),
                            new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fourth)),
                            new NoteDescriptor(new QuarterNote(NoteName.F, OctaveRegister.Fifth))
                        ]
                    }
                ];

                service.overrideAccidentals(sheet);

                expect(sheet.measureDescriptors.map(_ => _.noteDescriptors.map(_ => _.override.accidental))).toEqual(expected);
            });
        });
    });
});
