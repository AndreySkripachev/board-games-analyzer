import { range } from "../utils/functions/range";
import { BoardCell } from "./board-cell";
import { contains } from '../utils/functions/contains';
import { getElementFromList } from '../utils/functions/get-element-from-list';

export class Board {
    public readonly firstMapElement: BoardCell;

    constructor(
        start: number, 
        finish: number, 
        rules: readonly `${number}->${number}`[],
    ) {
        this.firstMapElement = this.mapRulesToBoard(
            [...range(start, finish+1)], 
            rules.map(item => item.split('->').map(Number) as [from: number, to:number]),
        );
    }

    private mapRulesToBoard(gamePoints: number[], rules: readonly [from: number, to:number][]): BoardCell {
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

        for (const [valueFrom, valueTo] of rules) {
            const from = getElementFromList(first, valueFrom);

            const to = getElementFromList(first, valueTo);

            from !== null && (from.shiftTo = to);
        }

        return first;
    }
}
