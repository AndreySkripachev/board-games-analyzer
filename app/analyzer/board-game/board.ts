import { range } from "../utils/functions/range";
import { BoardCell } from "./board-cell";

export class Board {
    public readonly firstMapElement: BoardCell;

    constructor(
        start: number, 
        finish: number, 
        rules: readonly `${number}->${number}`[]
    ) {
        this.firstMapElement = this.mapRulesToBoard(
            [...range(start, finish+1)], 
            rules.map(item => item.split('->').map(Number))
        )
    }

    private mapRulesToBoard(gamePoints: number[], rules: readonly number[][]): BoardCell {
        const first: BoardCell = {
            next: null,
            value: gamePoints[0],
        }

        let current = first;
        let previous = first;

        for (const item of gamePoints.slice(1)) {
            current = {
                next: null,
                value: item,
            }

            previous.next = current;

            previous = current;
        }

        return first;
    }
}
