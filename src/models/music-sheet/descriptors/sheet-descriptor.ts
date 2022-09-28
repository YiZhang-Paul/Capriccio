import type { Scale } from '@/enums/scale.enum';

import type { MeasureDescriptor } from './measure-descriptor';

export class SheetDescriptor {
    public scale: Scale;
    public tempo: number;
    public measureDescriptors: MeasureDescriptor[];

    constructor(scale: Scale, tempo: number, measureDescriptors: MeasureDescriptor[] = []) {
        this.scale = scale;
        this.tempo = tempo;
        this.measureDescriptors = measureDescriptors;
    }
}
