import React,{Component} from 'react'

class ClassEventH extends Component{
    constructor(props){
        super(props)

        this.state={
            message:"hello"
        }

        this.changeStateC=this.changeStateC.bind(this);//bind in the constructor when method is not created using arrow function
    }

    //event binding is done by using arrow function syntax for method 
     changeState = ()=>{
        this.setState({
            message:"state is changed now"
        })
    }

     changeStateC(){
        this.setState({
            message:"state is changed now"
        })
    }

    render(){
        return(
            <div>
                {this.state.message}
                <button onClick={()=>this.changeStateC()}>Chage by arrow function in onClick</button> {/* Event Binding by calling event by arrow function in onClick*/}
                <button onClick={this.changeState.bind(this)}>Change with Bind</button> {/* Event Binding by using bind*/}
                <button onClick={this.changeStateC}>Change with constructor bind</button> {/* Event Binding by constructor bind*/}
                <button onClick={this.changeState}>Change</button>
            </div>
        )
    }
}

export default ClassEventH 