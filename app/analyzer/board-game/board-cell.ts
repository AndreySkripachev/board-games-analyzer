import { LinkedList } from "../utils/types/linked-list";

export interface BoardCell extends LinkedList<BoardCell> {
    shiftTo?: BoardCell;
}


