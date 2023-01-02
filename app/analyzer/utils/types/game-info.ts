import { BoardGame } from '../../board-game/board-game';
import { Player } from '../../board-game/player';

export interface GameInfo {
    currentPlayer: {
        name: Player['value'];
        position: Player['position'];
    }
}