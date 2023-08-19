import React from "react";

const StopPropagation = () =>{

    const handleClick = e =>{
        console.log("I am Children Handler", e);
        e.stopPropagation();
    }

    const handeParent = e =>{
        console.log("I am Parents Handler", e)
    }

    return(
        <section onClick={handeParent} className="card">
            <h1>Welcome</h1>
            <button onClick={handleClick}>Stop Propagation</button>
        </section>
    )
}

export default StopPropagation;