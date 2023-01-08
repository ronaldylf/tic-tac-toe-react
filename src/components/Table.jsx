import React from 'react';
import '../css/Table.css';
import Square from './Square';

export default function Table(props) {

    function renderSquare(i) {
        return (
            <Square
            id_={i}
            />
        )
    }

    return( 
    <>
    <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
    </div>

    <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
    </div>

    <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
    </div>

    </> 
    )
}