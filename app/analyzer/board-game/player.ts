import { BoardCell } from '.';
import { LinkedList } from '../utils/types';

export interface PlayerInfo {
    readonly canMove: boolean;
    readonly name: string;
    readonly position: BoardCell['value'];
}

export class Player implements LinkedList<Player> {
    public next: Player | null = null;
    public canMove = true;

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
