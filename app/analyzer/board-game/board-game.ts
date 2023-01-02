import { Dice } from "../dice/dice";
import { LinkedList } from "../utils/types";
import { Player } from "./player";

export class BoardGame {
    public constructor(
        private readonly dice: Dice,
        mapLength: number,
        players: LinkedList<Player>,
    ) {}
}