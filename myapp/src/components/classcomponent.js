//import this for class component
import React,{Component} from 'react';

//es6 class should react component
class Welcome extends Component{
    render(){
        return (
        <div>
        <h1>This is from Class Component</h1>
        <h2>{this.props.name} Titan name is {this.props.titan}</h2> {/* Accessing props in class component */}
        </div>
        )
    }
}

//export class
export default Welcome;