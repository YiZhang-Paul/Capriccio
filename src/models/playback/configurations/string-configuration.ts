export class StringConfiguration<T> {
    public type: T;
    public volume: number;

    constructor(type: T, volume: number) {
        this.type = type;
        this.volume = volume;
    }
}
