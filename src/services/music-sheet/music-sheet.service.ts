import type { SheetDescriptor } from '@/models/music-sheet/descriptors/sheet-descriptor';
import { ScaleName } from '@/enums/scale-name.enum';
import { ScaleType } from '@/enums/scale-type.enum';
import { NoteName } from '@/enums/note-name.enum';
import { Accidental } from '@/enums/accidental.enum';

const scales = {
    [ScaleName.DMajor]: { type: ScaleType.Major, notes: new Set([NoteName.C, NoteName.F]) }
};

export class MusicSheetService {

    public overrideAccidentals(sheet: SheetDescriptor): void {
        for (const measureDescriptor of sheet.measureDescriptors) {
            const seen = new Map();

            for (const { base, override } of measureDescriptor.noteDescriptors) {
                override.accidental = undefined;
                const note = `${base.name}${base.octave}`;
                const hasAccidental = base.accidental !== Accidental.None;

                if (!hasAccidental && seen.has(note)) {
                    override.accidental = seen.get(note);
                }

                if (hasAccidental) {
                    seen.set(note, base.accidental);
                }
            }
        }

        const { type, notes } = scales[sheet.scale];

        for (const { base, override } of sheet.measureDescriptors.map(_ => _.noteDescriptors).flat()) {
            const canOverride = base.accidental === Accidental.None && !override.accidental;

            if (canOverride && notes.has(base.name)) {
                override.accidental = type === ScaleType.Major ? Accidental.Sharp : Accidental.Flat;
            }
        }
    }
}
