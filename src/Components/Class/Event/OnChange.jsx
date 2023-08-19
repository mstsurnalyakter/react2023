import React, { Component } from "react";

class OnChange extends Component{
    constructor(props){
        super(props);

        this.state = {
            changeValue:""
        }

    }

    handleChange = (e) =>{
            this.setState({
                changeValue:e.target.value
            })
    }

    

    render(){
        console.log(this.changeValue)
        return(
            <section>
                <input type="text" name="name" id="name" onChange={this.handleChange} />
                <p>{this.state.changeValue}</p>
            </section>
        )
    }
}

export default OnChange;