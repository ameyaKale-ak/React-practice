//alway include
import React from 'react';

//function without props
function greet(props){
    return (
    <div>
        <h1>This is a function component </h1>
        <h2>{props.name} Titan name is {props.titan}</h2> {/* Accessing props */}
        {props.children}
    </div>
    )
}

//export function
export default greet;