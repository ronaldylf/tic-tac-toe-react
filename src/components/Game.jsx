import React from 'react';
import Table from './Table';
import { useState } from 'react';

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXtime, setisXTime] = useState(true);
    const [status, setStatus] = useState("Start some game");

    function handleClick(id_) {
        let new_squares = squares.slice();
        if (new_squares[id_]) return;// avoid already used square
        new_squares[id_] = (isXtime) ? "X" : "O";
        const next_player = (isXtime) ? "O" : "X";
        const status = `Next player: ${next_player}`;
        console.log(status);
        setStatus(status);
        setSquares(new_squares); // update squares with the new move
        setisXTime(!isXtime); // change player move
    }

    return(
    <>
    <h1 className='status'>{status}</h1>
    <Table handleClick={handleClick} squares={squares}/>
    </>
    )
}