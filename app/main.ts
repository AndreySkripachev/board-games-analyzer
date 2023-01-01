import { Board } from './analyzer/board-game/board'

const board = new Board(1, 10, ['3->6', '4->2', '15->3']);

console.log(board.firstMapElement);
