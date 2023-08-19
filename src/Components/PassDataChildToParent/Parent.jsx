import React, { useState } from "react";
import Child from "./Child";

const Parent = () =>{
    const [text , setText] = useState("")
    const parent = "I am text from Parent";
    const handeChildren = child =>{
         setText(child)
    }
    return(
        <section>
            <Child parent = {parent} onHnadle={handeChildren} />
            <p>{text}</p>

        </section>
    )
}


export default Parent;