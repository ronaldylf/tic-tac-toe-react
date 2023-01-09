import React from 'react';
import '../css/Square.css';


export default function Square (props) {
    return(
    <>
        <div className='square-container' onClick={props.onClick}>
        {props.status}
        </div>
    </>
    )
}