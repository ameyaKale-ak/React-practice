import React,{ Component } from "react"

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"This message is state"
        }
    }

    change(){
        this.setState({
            message:"The message state is changed now"
        })
    }

    back(){
        this.setState({message:"This message is state"});
    }

    render(){
        const {message}=this.state //destructing of state
        return(
            <div>
                <h1>{message}</h1>
                <button onClick={() =>this.change()}>Change</button>
                <button onClick={() =>this.back()}>Back to same state</button>
            </div>
        )
    }

}

export default Message;