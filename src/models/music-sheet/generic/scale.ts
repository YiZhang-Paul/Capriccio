import type { ScaleType } from '@/enums/scale-type.enum';
import type { NoteName } from '@/enums/note-name.enum';

export class Scale {
    public type: ScaleType;
    public notes: Set<NoteName>;

    constructor(type: ScaleType, notes = new Set<NoteName>()) {
        this.type = type;
        this.notes = notes;
    }
}
