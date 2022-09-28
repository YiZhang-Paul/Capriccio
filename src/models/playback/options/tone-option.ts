import { StringName } from '@/enums/string-name.enum';
import { VibratoType } from '@/enums/vibrato-type.enum';

export class ToneOption {
    public string: StringName;
    public vibrato: VibratoType;

    constructor(string = StringName.D, vibrato = VibratoType.Soft) {
        this.string = string;
        this.vibrato = vibrato;
    }
}
