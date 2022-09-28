import { Scale } from '@/models/music-sheet/generic/scale';
import { ScaleName } from '@/enums/scale-name.enum';
import { ScaleType } from '@/enums/scale-type.enum';
import { NoteName } from '@/enums/note-name.enum';

export const scales = {
    [ScaleName.DMajor]: new Scale(ScaleType.Major, new Set([NoteName.C, NoteName.F]))
};
