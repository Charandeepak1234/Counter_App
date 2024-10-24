import {Component} from "react"
import "./counter.css"

class Counter extends Component{
    state={count: 0}
    onIncrement=()=>{
        this.setState(prevState=>({count:prevState.count+1}))
    }
    onDecrement=()=>{
        this.setState(prevState=>({count:prevState.count-1}))
    }
    render(){
        const {count}=this.state
        return(
            <div className="back">
                <div>
                <h1>Counter</h1>
                <p>{count}</p>
                <div>
                    <button onClick={this.onIncrement} className="button">increase</button>
                    <button onClick={this.onDecrement} className="button">decrease</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Counter