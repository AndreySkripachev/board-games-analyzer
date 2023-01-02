import { Dice } from '../dice/dice';
import { Player, Board } from '.';
import { GameStatus, GameInfo } from '../utils/types';
import { mapArrayToClosedList } from '../utils/functions';

// TODO: improve information visualization
export class BoardGame {
    private readonly board: Board;
    private player: Player;

    public constructor(
        private readonly dice: Dice,
        players: readonly string[],
        mapLength: number,
        rules: readonly `${number}->${number}`[],
        skipStepPoints: readonly number[],
    ) {
        this.board = new Board(1, mapLength, rules, skipStepPoints);

        this.player = mapArrayToClosedList<string, Player>(players, name => new Player(
            name, 
            this.board.firstMapElement,
        ))
    }

    public step(): GameStatus {
        if (!this.player.canMove) {
            this.player.canMove = true;

            this.changePlayer();
            return GameStatus.OK;
        }

        const steps = this.dice.roll();

        this.player.moveBy(steps);
        this.changePlayer();
        
        if (this.player.position.next === null) {
            return GameStatus.FINISH;
        }

        return GameStatus.OK;
    }

    public getGameInfo(): GameInfo {
        return {
            currentPlayer: {
                name: this.player.value,
                position: this.player.position,
                canMove: this.player.canMove,
            }
        }
    }

    private changePlayer(): void {
        if (this.player.next !== null) {
            this.player = this.player.next;
        }
    }
}