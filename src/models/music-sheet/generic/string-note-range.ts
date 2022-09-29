import type { Note } from '../notes/note';

export class StringNoteRange {
    public lowest: Note;
    public thirdPositionHighest: Note;
    public highest: Note;

    constructor(lowest: Note, thirdPositionHighest: Note, highest: Note) {
        this.lowest = lowest;
        this.thirdPositionHighest = thirdPositionHighest;
        this.highest = highest;
    }
}
