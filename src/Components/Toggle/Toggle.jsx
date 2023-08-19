import React, { useState } from "react"

const Toggle = () =>{
    const [toggle, setToggle] = useState(false);

     const handleClick = e =>{
        setToggle(!toggle)
     }

    return(
        <section className="card">

           {toggle && (
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius eveniet doloribus delectus corporis ea aut officiis nesciunt autem, architecto, ullam, dolor quisquam asperiores sit necessitatibus velit mollitia consectetur exercitationem repellendus!</p>
           )}

           <button onClick={handleClick}>{toggle ? "Hiden":"Show"}</button>

        </section>
    )
}

export default Toggle;