import React from 'react';
import Table from './Table';
import { useState } from 'react';

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXtime, setisXTime] = useState(true);

    function handleClick(id_) {
        let new_squares = squares.slice();
        if (new_squares[id_]) return;// avoid already used square

        new_squares[id_] = (isXtime) ? "X" : "O";
        setSquares(new_squares); // update squares with the new move
        setisXTime(!isXtime); // change player move
        console.log("clicked " + String(id_));
    }

    return(
    <>
    <Table handleClick={handleClick} squares={squares}/>
    </>
    )
}