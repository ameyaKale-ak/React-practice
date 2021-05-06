import React,{Component} from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
        this.setState( (pervious)=>({
            count:pervious.count+1
         }))
    }

    dec_f(){
        this.decrement();
        this.decrement();
        this.decrement();
        this.decrement();
    }

    inc_f(){
       this.increment();
       this.increment();
       this.increment();
       this.increment();
    }

    decrement(){
        this.setState( (perviousState)=>({
           count:perviousState.count-1
        }))
    }

    render(){
        return(
        <div>
            <div>
               Count- {this.state.count}
               <button onClick={()=>this.increment()}>Inc</button>
               <button onClick={()=>this.decrement()}>dec</button>
               <button onClick={()=>this.dec_f()}>dec 4</button>
               <button onClick={()=>this.inc_f()}>inc 4</button>
            </div>
        </div>
        )
    }
}

export default Counter;