import { Player } from '../../board-game';

export interface GameInfo {
    currentPlayer: {
        name: Player['value'];
        position: Player['position'];
        canMove: Player['canMove'];
    }
}