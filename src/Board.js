import React, { Component } from 'react';
import Cell from './cell.js';


class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            hasWon: false,
            board: this.createBoard()
        };

        this.createBoard = this.createBoard.bind(this);
    }

    createBoard() {
        let board = [];

        for (let i = 0; i < this.props.ncols; i++) {
            let tempArray = [];
            for (let j = 0; j < this.props.nrows; j++) {
                tempArray.push([false, true][Math.floor(Math.random() * 2)]);
            }
            board.push(tempArray);
        }
        return board;
    }

    flipCellsAround(coord) {
        console.log('flipping', coord);
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            // flip coord if its on board
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }

        flipCell(y, x);
        flipCell(y, x-1);
        flipCell(y, x+1);
        flipCell(y-1, x);
        flipCell(y+1, x);

        let hasWon = board.every(row => row.every(cell => !cell));

        this.setState((prevSt) => ({
            board: board,
            hasWon: hasWon
        }))
    }
    render() {

        if (this.state.hasWon) {
            return (<h1 className="neon">Congratulations</h1>)
        }
        return ( 
            <table>
                <tbody>
                    {
                        this.state.board.map((each, i) => 
                            <tr key={i}>{each.map((lit, j) => 
                                <Cell 
                                    isLit={lit} 
                                    key={`${i}-${j}`}
                                    akey={`${i}-${j}`}
                                    flipCellsAroundMe={() => this.flipCellsAround(`${i}-${j}`)}
                                />)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
      )
    }
}

export default Board;