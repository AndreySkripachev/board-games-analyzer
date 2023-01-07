import readline from 'readline';
import { BoardGame } from './analyzer/board-game';
import { Dice } from './analyzer/dice/dice';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const players = ['Андрей', 'Алина', 'Иван'];

const game1 = new BoardGame(
    new Dice(6, 2), 
    players, 
    88, 
    [
        '3->12', 
        '9->4', 
        '10->27', 
        '13->18',
        '14->11',
        '16->21',
        '20->17',
        '23->24',
        '29->8',
        '31->34',
        '33->37',
        '42->51',
        '43->48',
        '50->39',
        '55->58',
        '56->49',
        '65->60',
        '67->70',
        '72->57',
        '73->80',
        '76->69',
        '78->85',
        '84->79',
        '86->82',
    ],
    [7, 19, 26, 41, 54, 71],
)

const game = game1;

async function main(): Promise<void> {
    const game = game1;

    while (true) {
        console.log(game.getLastLogs().join('\n'));
        const status = game.step();
    
        if (status === 'FINISH')
            break;
    }

    console.log(game.getLastLogs().join('\n'));

    return void 0;
}

main().then(readlineInterface.close);



console.log(process.stdout.columns);