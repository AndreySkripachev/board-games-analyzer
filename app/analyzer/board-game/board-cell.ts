import { LinkedList } from '../utils/types';

export interface BoardCell extends LinkedList<BoardCell> {
    shiftTo?: BoardCell;
    shouldSkipStep: boolean;
}


