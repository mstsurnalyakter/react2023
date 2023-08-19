import React, { useState } from "react";

const OnChange = () =>{
        const [changeValue, setChangeValue] = useState("");

        const handleChange = (e) =>{
            setChangeValue(e.target.value);
        }

        return(
            <section>
                <input type="text" name="name" id="name" onChange={handleChange} />
                <h1>{changeValue}</h1>
            </section>
        )
}

export default OnChange;