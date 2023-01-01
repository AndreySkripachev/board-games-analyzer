import { BoardCell } from './board-cell'

export class Player {
    public nextPlayer: Player | null = null;

    constructor(
        public readonly name: string,
        public position: BoardCell
    ) {}
    
    public moveBy(steps: number): void {
        for (let _i=0; _i < steps; _i++) {
            if (this.position.next !== null)
                this.position = this.position.next;
        }

        while (this.position.shiftTo !== undefined) {
            this.position = this.position.shiftTo;
        }
    }
}
