import React from 'react';
import Table from './Table';
import { useState } from 'react';
import '../css/Game.css';

function restartGame() {
    console.log("restarting...")
    window.location.reload()
}

export default function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXtime, setisXTime] = useState(true);
    const [status, setStatus] = useState("Next player: X");
    const [winner, setWinner] = useState(null);

    function handleClick(id_) {
        let new_squares = squares.slice();

        const possible_lines = [
            // rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            // columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            // diagonals
            [0, 4, 8],
            [2, 4, 6]
        ]

        if (new_squares[id_] || winner) return;// avoid already used square
        new_squares[id_] = (isXtime) ? "X" : "O";
        setSquares(new_squares); // update squares with the new move
        const next_player = (isXtime) ? "O" : "X";
        setisXTime(!isXtime); // change player move
        

        let possible_winner = null;
        let num_nonwinner_lines = 0;
        for (let i=0; i<possible_lines.length; i++) {
            const line = possible_lines[i];
            const [a, b, c] = [new_squares[line[0]], new_squares[line[1]], new_squares[line[2]]];
            if (a==="X" && b==="X" && c==="X") {
                possible_winner = "X";
                break;
            } else if (a==="O" && b==="O" && c==="O") {
                possible_winner = "O";
                break;
            } else if (a && b && c) {
                num_nonwinner_lines += 1;
            }
        }
        
        // if all the possible lines are filled and have no winner, so it's a draw
        possible_winner = (num_nonwinner_lines === possible_lines.length) ? "draw" : possible_winner;

        let status = (possible_winner) ? `Winner: ${possible_winner}` : `Next player: ${next_player}`;
        status = (possible_winner === "draw") ? "Draw!" : status; // a different status for draw
        setStatus(status); // update status
        setWinner(possible_winner); // update winner
    }

    return(
    <div className='game-container'>
        <h2 className='status'>{status}</h2>
        <Table className='game-table' handleClick={handleClick} squares={squares}/>
        <button className='restart-button' onClick={() => restartGame()}>Restart</button>
    </div>
    )
}