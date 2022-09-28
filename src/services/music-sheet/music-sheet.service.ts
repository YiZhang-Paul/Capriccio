import { keySignatures } from '@/constants/key-signatures';
import type { Note } from '@/models/music-sheet/notes/note';
import type { KeySignature } from '@/models/music-sheet/generic/key-signature';
import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import type { MeasureDescriptor } from '@/models/music-sheet/descriptors/measure-descriptor';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';

export class MusicSheetService {

    public overrideAccidentals(sheet: SheetDescriptor): void {
        const noteDescriptors = sheet.measureDescriptors.map(_ => _.noteDescriptors).flat();
        noteDescriptors.forEach(_ => _.override.accidental = undefined);
        // explicit accidentals must be applied before accidentals from key signature
        this.overrideAccidentalsByMeasure(sheet.measureDescriptors);
        this.overrideAccidentalsByKeySignature(noteDescriptors, keySignatures.find(_ => _.name === sheet.keySignature)!);
    }

    private overrideAccidentalsByMeasure(measureDescriptors: MeasureDescriptor[]): void {
        for (const measureDescriptor of measureDescriptors) {
            const overrides = new Map();

            for (const { base, override } of measureDescriptor.noteDescriptors) {
                const note = `${base.name}${base.octave}`;

                if (!base.hasAccidental && overrides.has(note)) {
                    override.accidental = overrides.get(note);
                }
                else if (base.hasAccidental) {
                    overrides.set(note, base.accidental);
                }
            }
        }
    }

    private overrideAccidentalsByKeySignature<T extends Note>(noteDescriptors: NoteDescriptor<T>[], keySignature: KeySignature): void {
        const { accidental, notes } = keySignature;

        for (const { base, override } of noteDescriptors) {
            const canOverride = !base.hasAccidental && !override.accidental;

            if (canOverride && notes.has(base.name)) {
                override.accidental = accidental;
            }
        }
    }
}
