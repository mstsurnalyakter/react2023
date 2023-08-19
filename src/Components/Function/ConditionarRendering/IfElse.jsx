import React, { useState } from "react";
import Home from "./Home";
import SignIn from "./SingIn";

const IfElse = () =>{
    const [isSingIn, setIsSingIn] = useState(true);

     if(isSingIn){
        return <Home />
     }
     else{
        return <SignIn />
     }
}

export default IfElse;