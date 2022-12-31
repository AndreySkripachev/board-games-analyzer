export class Shifter {
    constructor(
        public readonly from: number,
        private readonly to: number,
    ) {}

    public shift(callback: (to: number) => void): void {
        callback(this.to);
    }
}