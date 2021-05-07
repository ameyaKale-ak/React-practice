import React from 'react'

const Click=()=>{
    const clickEvent=()=>{
        console.log("Functional Button Click Event")
    }
    return(
    <div>
        <button onClick={clickEvent}/*this ie eventhndling in functional component*/>Click</button>
    </div>)
}

export default Click;