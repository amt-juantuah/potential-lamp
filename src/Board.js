import React, { Component } from 'react';
import Cell from './cell.js';


class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        changeLightStartsOn: 0.25
    };
    

    constructor(props) {
        super(props);
        // this.props = {
        //     nrows: 9,
        //     ncols: 9,
        //     changeLightStartsOn: 0
        // };
        this.state = {
            hasWon: false,
            board: this.createBoard()
        };

        this.createBoard = this.createBoard.bind(this);
        this.flipCellsAround = this.flipCellsAround.bind(this);
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
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);

        function flipCell(y, x) {
            // flip coord if its on board
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }
    }
    render() {
        
        console.log(this.state.board);
        const tRow = (x) => {x.map(lit => {<Cell isLit={lit} />})};
        return (
            <table>

                <tbody>
                    {
                        this.state.board.map((each, i) => 
                            <tr key={i}>{each.map((lit, j) => 
                                <Cell 
                                    isLit={lit} 
                                    key={`${i}-${j}`}
                                    flipCellsAroundMe={this.flipCellsAround}
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