export class Dice  {
    public constructor(
        private readonly value: number,
        private readonly diceCount: number
    ) {}

    public roll(): number {
        let total = 0;

        for (let i=0; i < this.diceCount; i++) {
            total += Math.ceil(Math.random() * this.value);
        }

        return total;
    }
}
