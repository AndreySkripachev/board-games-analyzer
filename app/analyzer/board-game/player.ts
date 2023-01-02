import { BoardCell } from './board-cell'
import { LinkedList } from '../utils/types'

export class Player implements LinkedList<Player> {
    public next: Player | null = null;

    public constructor(
        public readonly value: string,
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

    public getName(): string {
        return this.value;
    }
}
