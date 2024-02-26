import generateBasicBoard from "@/generateBoard";

export default class Game {
    private board: Board;
    
    constructor() {
        this.board = generateBasicBoard()
    }
}