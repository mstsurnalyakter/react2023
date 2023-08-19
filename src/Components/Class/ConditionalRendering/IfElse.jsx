import React from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import { Component } from "react";

class IfElse extends Component{

    constructor(props){
        super(props);

        this.state ={
            isLogin:true
        }
    }

    render(){

         if(this.state.isLogin){
            return <Home />
         }
         else{
            return <SignIn />
         }
    }
}
  
export default IfElse;