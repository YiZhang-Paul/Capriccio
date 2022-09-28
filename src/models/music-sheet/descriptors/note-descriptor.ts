import type { Note } from '../notes/note';
import { NoteOverride } from '../overrides/note-override';
import { NoteOption } from '../options/note-option';

export class NoteDescriptor<T extends Note> {
    public base: T;
    public override: NoteOverride;
    public option: NoteOption;

    constructor(base: T, override = new NoteOverride(), option = new NoteOption()) {
        this.base = base;
        this.override = override;
        this.option = option;
    }
}
