import { Board } from './analyzer/board-game/board'
import { Player } from './analyzer/board-game/player';
import { mapArrayToClosedList } from './analyzer/utils/functions/map-array-to-closed-linked-list';

interface BasePlayer {
    readonly name: string;
    readonly position: Board['firstMapElement'];
} 

const board = new Board(1, 10, ['3->6', '4->2', '15->3']);
const players: readonly BasePlayer[] = [
    {
        name: 'Test',
        position: board.firstMapElement,
    },
    { 
        name: 'Tets2',
        position: board.firstMapElement,
    },
    {
        name: 'Qwe',
        position: board.firstMapElement
    },
    {
        name: 'Zxc',
        position: board.firstMapElement
    }
];

mapArrayToClosedList<BasePlayer, Player>(players, ({ name, position }) => {
    return new Player(name, position);
})

console.log(board.firstMapElement);
