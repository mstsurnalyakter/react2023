import React, { useState } from "react";
import Home from "./Home";
import SignIn from "./SingIn";

const ShortCircuit = () =>{
    const [isSingIn, setIsSingIn] = useState(false);

    return isSingIn && <Home /> 
}

export default ShortCircuit;