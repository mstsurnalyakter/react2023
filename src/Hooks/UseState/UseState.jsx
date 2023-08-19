import React, { useState } from "react";

 

const UseState = () =>{
    const [count, setCount] = useState(0);

    const hnadleClick = () =>{
        setCount(count => count + 1);
        setCount(count => count + 1);
    }


    return(
        <section>
            <h1>Count: {count}</h1>
            <button onClick={hnadleClick}>+</button>
        </section>
    )
}

export default UseState;