import React from 'react';
import '../css/Square.css';

function printId(obj) {
    console.log(obj)    
}

export default function Square (props) {
    return(
    <>
        <div className='square-container' onClick={() => printId(props.id_)}>
            {props.id_}
        </div>
    </>
    )
}