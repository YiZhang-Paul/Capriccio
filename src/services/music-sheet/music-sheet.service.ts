import { scales } from '@/constants/scales';
import type { Note } from '@/models/music-sheet/notes/note';
import type { Scale } from '@/models/music-sheet/generic/scale';
import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import type { MeasureDescriptor } from '@/models/music-sheet/descriptors/measure-descriptor';
import type { NoteDescriptor } from '@/models/music-sheet/descriptors/note-descriptor';
import { ScaleType } from '@/enums/scale-type.enum';
import { Accidental } from '@/enums/accidental.enum';

export class MusicSheetService {

    public overrideAccidentals(sheet: SheetDescriptor): void {
        const noteDescriptors = sheet.measureDescriptors.map(_ => _.noteDescriptors).flat();
        noteDescriptors.forEach(_ => _.override.accidental = undefined);
        this.overrideAccidentalsByMeasure(sheet.measureDescriptors);
        this.overrideAccidentalsByScale(noteDescriptors, scales[sheet.scale]);
    }

    private overrideAccidentalsByMeasure(measureDescriptors: MeasureDescriptor[]): void {
        for (const measureDescriptor of measureDescriptors) {
            const seen = new Map();

            for (const { base, override } of measureDescriptor.noteDescriptors) {
                const note = `${base.name}${base.octave}`;

                if (!base.hasAccidental && seen.has(note)) {
                    override.accidental = seen.get(note);
                }

                if (base.hasAccidental) {
                    seen.set(note, base.accidental);
                }
            }
        }
    }

    private overrideAccidentalsByScale<T extends Note>(noteDescriptors: NoteDescriptor<T>[], scale: Scale): void {
        const { type, notes } = scale;

        for (const { base, override } of noteDescriptors) {
            const canOverride = !base.hasAccidental && !override.accidental;

            if (canOverride && notes.has(base.name)) {
                override.accidental = type === ScaleType.Major ? Accidental.Sharp : Accidental.Flat;
            }
        }
    }
}
