import React, { useState } from "react";
import Home from "./Home";
import SignIn from "./SingIn";

const ElementOperator = () =>{
    const [isSingIn, setIsSingIn] = useState(false);
    let element;
    if(isSingIn){
        element = <Home />
    }
    else{
        element = <SignIn />
    }

    return element;
}

export default ElementOperator;