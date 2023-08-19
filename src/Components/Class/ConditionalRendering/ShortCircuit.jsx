import React, { Component } from "react";
import Home from "./Home";
import SignIn from "./SignIn";

class ShortCircuit extends Component{
    constructor(props){
        super(props);

        this.state ={
            isLogin:false
        }
    }
    
    render(){

        const {isLogin} = this.state
        return isLogin && <Home />
    }
}

export default ShortCircuit;