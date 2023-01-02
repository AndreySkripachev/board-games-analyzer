import { range, getElementFromList } from '../utils/functions';
import { BoardCell } from '.';

export class Board {
    public readonly firstMapElement: BoardCell;

    public constructor(
        start: number, 
        finish: number, 
        rules: readonly `${number}->${number}`[],
        skipSteps: readonly number[],
    ) {
        this.firstMapElement = this.mapRulesToBoard(
            [...range(start, finish+1)], 
            rules.map(item => item.split('->').map(Number) as [from: number, to:number]),
            skipSteps,
        );
    }

    private mapRulesToBoard(
        gamePoints: number[], 
        rules: readonly [from: number, to:number][],
        skipSteps: readonly number[],
    ): BoardCell {
        const first: BoardCell = {
            next: null,
            value: gamePoints[0],
            shouldSkipStep: false,
        }

        let current = first;
        let previous = first;

        for (const item of gamePoints.slice(1)) {
            current = {
                next: null, 
                value: item,
                shouldSkipStep: skipSteps.includes(item)
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
