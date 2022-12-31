export class Dice  {
    constructor(private readonly value: number) {}

    public roll(): number {
        return Math.ceil(Math.random() * this.value);
    }
}
