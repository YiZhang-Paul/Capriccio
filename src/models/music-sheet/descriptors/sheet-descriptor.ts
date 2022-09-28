import type { ScaleName } from '@/enums/scale-name.enum';

import type { MeasureDescriptor } from './measure-descriptor';

export class SheetDescriptor {
    public scale: ScaleName;
    public tempo: number;
    public measureDescriptors: MeasureDescriptor[];

    constructor(scale: ScaleName, tempo = 60, measureDescriptors: MeasureDescriptor[] = []) {
        this.scale = scale;
        this.tempo = tempo;
        this.measureDescriptors = measureDescriptors;
    }
}
