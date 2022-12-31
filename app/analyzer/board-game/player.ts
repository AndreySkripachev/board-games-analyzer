export class Player {
    public nextPlayer: Player | null = null;

    constructor(
        public readonly name: string,
    ) {}
}