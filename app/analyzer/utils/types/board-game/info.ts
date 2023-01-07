import { PlayerInfo } from '../../../board-game';

export interface GameInfo {
    currentPlayer: PlayerInfo,
    players: readonly PlayerInfo[],
}