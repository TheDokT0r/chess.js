declare global {
    type ColorPiece = 'black' | 'white' | null;

    interface ChessPiece {
        type: 'pawn' | 'bishop' | 'knight' | 'rook' | 'queen' | 'king' | null;
        color: ColorPiece;
    }

    interface Board {
        // [key: `${string[0]}${number}`]: ChessPiece;
        [key: string]: ChessPiece;
    }
}

export {}