import React, { useState } from "react";
import StateLiftign from "./StateLifting";

const App2 = () =>{
    const [text, setText] = useState("");

    const  handleChilData = data =>{
            setText(data);
    }
    return(
        <section>
        <StateLiftign title="Mst Surnaly Akter" onHnanleChildData = {handleChilData} />
        <p>{text}</p>
        </section>
    )
}


export default App2;