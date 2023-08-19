import React, { useState } from "react";

const OnClick = () =>{
    const [clickValue, setClickValue] = useState(0);

    const handleClick = () =>{
        setClickValue(clickValue - 1);
    }

    return(
        <section>
            <h1>Count: {clickValue} (Decriment)</h1>
            <button onClick={handleClick}>-</button>
        </section>
    )
}

export default OnClick;