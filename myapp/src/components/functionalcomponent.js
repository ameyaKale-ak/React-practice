//alway include
import React from 'react';

//function with props
function greet(props){
    const {name,titan}=props //destucturing props in function body
    return (
    <div>
        <h1>This is a function component </h1>
        <h2>{name} Titan name is {titan}</h2> {/*Accessing props in function */}
        {props.children}
    </div>
    )
}

//export function
export default greet;