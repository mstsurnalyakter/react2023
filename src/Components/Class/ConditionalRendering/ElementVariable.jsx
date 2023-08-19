import React, { Component } from "react";
import Home from "./Home";
import SignIn from "./SignIn";

class ElementVariable extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin:true
        }
    }
    render(){
        let element;
        if(this.state.isLogin){
            element = <Home />
        }
        else{
            element = <SignIn />
        }

        return element;
       
    }
}

export default ElementVariable;