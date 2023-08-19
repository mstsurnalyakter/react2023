import React, { useState } from "react";
import Home from "./Home";
import SignIn from "./SingIn";

const TernaryOperator = () =>{
    const [isSingIn, setIsSingIn] = useState(true);

    return isSingIn ? <Home />: <SignIn/>
}

export default TernaryOperator;