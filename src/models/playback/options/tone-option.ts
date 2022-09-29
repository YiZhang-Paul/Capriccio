import { StringName } from '@/enums/string-name.enum';
import type { VibratoType } from '@/enums/vibrato-type.enum';

export class ToneOption {
    public string: StringName;
    public vibrato: VibratoType | null;

    constructor(string = StringName.D, vibrato: VibratoType | null = null) {
        this.string = string;
        this.vibrato = vibrato;
    }
}
