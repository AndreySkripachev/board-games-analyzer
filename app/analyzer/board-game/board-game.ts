import { Dice } from '../dice/dice';
import { Player } from './player';
import { Board } from './board';
import { GameStatus } from '../utils/types/game-status';
import { GameInfo } from '../utils/types/game-info'

export class BoardGame {
    private readonly board: Board;

    public constructor(
        private readonly dice: Dice,
        private player: Player,
        mapLength: number,
        rules: readonly `${number}->${number}`[],
    ) {
        this.board = new Board(1, mapLength, rules);
    }

    public step(): GameStatus {
        const steps = this.dice.roll();

        this.player.moveBy(steps);
        
        if (this.player.position.next === null) {
            return GameStatus.FINISH;
        }

        if (this.player.next !== null) {
            this.player = this.player.next;
        }

        return GameStatus.OK;
    }

    public getGameInfo(): GameInfo {
        return {
            currentPlayer: {
                name: this.player.value,
                position: this.player.position,
            }
        }
    }
}