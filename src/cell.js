import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        // call up to the board to flip cells around this cell
        this.props.flipCellsAroundMe();
    }

    render() {
        return (
            <td className='CellDiv'>
                I am a cell
            </td>
        )
    }
}

export default Cell;