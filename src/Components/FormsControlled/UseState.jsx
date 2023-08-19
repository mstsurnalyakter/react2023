import React, { useState } from "react";


const userInf = {
    name:"",
    email:"",
    password:""
}

const UseState = () =>{
    const [users, setUsers] =useState(userInf);
    const {name, email, password} = users;

    const handleName = e =>{
        setUsers({name:e.target.value, email, password});
    }

    const handleEmail = e =>{
        setUsers({name, email:e.target.value, password});
    }

    const handlePassword = e =>{
        setUsers({name, email, password:e.target.value});
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(users);
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

export default UseState;