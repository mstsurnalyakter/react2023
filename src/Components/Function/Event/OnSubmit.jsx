import React, { useState } from "react";

const OnSubmit = () =>{
    const [name, setName] = useState("");

  const hnadleChange = e =>{
        setName(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setName("");
         
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" value={name} onChange={hnadleChange} />
            <button type="submit">Submit</button>
        </form>
        <h1>{name}</h1>

        </>
    )
}

export default OnSubmit;