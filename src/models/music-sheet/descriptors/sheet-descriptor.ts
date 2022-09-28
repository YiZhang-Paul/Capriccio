import type { KeySignature } from '@/enums/key-signature.enum';

import type { MeasureDescriptor } from './measure-descriptor';

export class SheetDescriptor {
    public keySignature: KeySignature;
    public tempo: number;
    public measureDescriptors: MeasureDescriptor[];

    constructor(keySignature: KeySignature, tempo: number, measureDescriptors: MeasureDescriptor[] = []) {
        this.keySignature = keySignature;
        this.tempo = tempo;
        this.measureDescriptors = measureDescriptors;
    }
}
