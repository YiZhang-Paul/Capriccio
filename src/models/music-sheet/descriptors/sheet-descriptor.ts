import type { KeySignatureName } from '@/enums/key-signature-name.enum';

import type { MeasureDescriptor } from './measure-descriptor';

export class SheetDescriptor {
    public keySignature: KeySignatureName;
    public tempo: number;
    public measureDescriptors: MeasureDescriptor[];

    constructor(keySignature: KeySignatureName, tempo = 60, measureDescriptors: MeasureDescriptor[] = []) {
        this.keySignature = keySignature;
        this.tempo = tempo;
        this.measureDescriptors = measureDescriptors;
    }
}
