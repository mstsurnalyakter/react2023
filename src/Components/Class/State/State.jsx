import React, { Component } from "react";

class State extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    handleSubmit = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        return(
          <section>
                <h1>Count: {this.state.count}</h1>
                 <button onClick={this.handleSubmit}>Submit</button>
          </section>
        )
    }
}

export default State;