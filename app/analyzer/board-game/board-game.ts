import { Dice } from '../dice/dice';
import { Player, Board } from '.';
import { GameStatus } from '../utils/types';
import { mapArrayToClosedList, mapClosedListToArray } from '../utils/functions';

export class BoardGame {
    private readonly board: Board;
    private readonly logs: string[] = [];
    private lastLog = 0;
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
        ));
        this.log('The game has been init.');
        this.log(`Players: ${this.playersToArray().join(', ')}`)
    }

    public step(): GameStatus {
        if (!this.player.canMove) {
            this.player.canMove = true;

            this.log(`Player ${this.player.value} now can move (Point ${this.player.position.value})`)
            this.changePlayer();
            return GameStatus.OK;
        }

        const steps = this.dice.roll();
        const prevPosition = this.player.position.value;
        this.player.moveBy(steps);
        this.log(`Player ${this.player.value}: ${prevPosition} -> ${this.player.position.value}`)
        
        if (this.player.position.next === null) {
            this.log(`Player ${this.player.value} win!`);
            return GameStatus.FINISH;
        }
        
        this.changePlayer();

        return GameStatus.OK;
    }

    public getLogs(): readonly string[] {
        return this.logs;
    }

    public getLastLogs(): readonly string[] {
        const lastLogs = this.logs.slice(this.lastLog);
        this.lastLog = this.logs.length;

        return lastLogs;
    }

    private changePlayer(): void {
        if (this.player.next !== null) {
            this.player = this.player.next;
        }
    }

    private playersToArray(): readonly string[] {
        return [...mapClosedListToArray<string, Player>(
            this.player,
            ({ value }) => value,
        )].sort();
    }

    private log(data: string): void {
        this.logs.push(`- ${data}`);
    }
}