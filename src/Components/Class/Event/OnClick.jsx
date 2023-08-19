import React, { Component } from "react";

class OnClick extends Component{
    constructor(props){
        super(props);

        this.state = {
            clickValue:0
        }
    }

    handleClick = () =>{
        this.setState({
            clickValue:this.state.clickValue + 1
        })
    }

    render(){
        return(
            <section>
                <h1>Count = {this.state.clickValue} </h1>
                <button onClick={this.handleClick}>+</button>

            </section>
        )
    }
}

export default OnClick;