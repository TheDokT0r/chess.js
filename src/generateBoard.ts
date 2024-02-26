const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const generateEmptyBoard = (): Board => {
    const board: Board = {};

    for(let i = 1; i < 9; i++) {
        chars.forEach(char => {
            board[char + i] = {type: null, color: null};
        });
    }

    return board;
}

const generateBasicBoard = (): Board => {
    const board = generateEmptyBoard();
    
    // Place pawns
    chars.forEach(char => {
        board[char + 2] = {type: 'pawn', color: 'white'};
        board[char + 7] = {type: 'pawn', color: 'black'};
    });

    //Place non-pawn pieces
    const piecesData = [{num: 1, color: 'white'}, {num: 8, color: 'black'}] as const;
    piecesData.forEach(({num, color}) => {
        board['a' + num] = {type: 'rook', color};
        board['b' + num] = {type: 'knight', color};
        board['c' + num] = {type: 'bishop', color};
        board['d' + num] = {type: 'queen', color};
        board['e' + num] = {type: 'king', color};
        board['f' + num] = {type: 'bishop', color};
        board['g' + num] = {type: 'knight', color};
        board['h' + num] = {type: 'rook', color};
    });

    return board;
}

export default generateBasicBoard;