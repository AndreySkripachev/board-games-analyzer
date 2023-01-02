import { BoardGame } from './analyzer/board-game';
import { Dice } from './analyzer/dice/dice';

const players = ['Andrey', 'Alina', 'Nikita'];

const game1 = new BoardGame(new Dice(6, 1), players, 88, [
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
])

const game = game1

while (true) {
    console.log(game.getGameInfo());
    const status = game.step();

    if (status === 'FINISH')
        break;
}

console.log(game.getGameInfo());
