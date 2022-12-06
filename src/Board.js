import React, { Component } from 'react';
import Cell from './cell.js';


class Board extends Component {
    // constructor(props) {
    //     super(props);
    //     this.props = {
    //         nrows: 9,
    //         ncols: 9,
    //         changeLightStartsOn: 0
    //     };
    //     this.state = {
    //         hasWon: false,
    //         board: new Array(this.props.ncols).fill(new Array(this.props.nrows).fill(false))
    //     }
    // }

    static defaultProps = {
        nrows: 9,
        ncols: 9,
        changeLightStartsOn: 0
    };
    
    createBoard() {
        let board = [];
        return board;
    }

    // flipCellsAround(coord) {
    //     let { ncols, nrows } = this.props;
    //     let board = this.state.board;
    //     let [y, x] = coord.split("-").map(Number);

    //     function flipCell(y, x) {
    //         // flip coord if its on board
    //         if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
    //             board[y][x] = !board[y][x];
    //         }
    //     }

    // }
    render() {
        const numrows = this.props.nrows;
        const numcols = this.props.ncols;
        console.log(numrows);
        console.log(numcols);
        return (
            <table>
                <tbody>
                    <tr>
                        <Cell isLit={true} />
                        <Cell isLit={false} />
                        <Cell isLit={true} />
                    </tr>

                    <tr>
                        <Cell isLit={true} />
                        <Cell isLit={false} />
                        <Cell isLit={true} />
                    </tr>

                    <tr>
                        <Cell isLit={true} />
                        <Cell isLit={false} />
                        <Cell isLit={true} />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Board;