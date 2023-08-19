import React, { useState } from "react";


const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = e =>{
         setName(e.target.value);
    }

    const handleEmail = e =>{
        setEmail(e.target.value);
    }

    const handlePassword = e =>{
        setPassword(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        let user = {
            name,
            email, 
            password
        }

        console.log(user);
    }

    return(
        <form onSubmit={handleSubmit}>
            <section  >
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={handleName} value={name} />
            </section>

            <section>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={handleEmail} value={email} />
            </section>

            <section>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={handlePassword} value={password} />
            </section>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;