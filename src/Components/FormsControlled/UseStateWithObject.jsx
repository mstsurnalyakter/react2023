import React, { useState } from "react";


const userIfo = {
        name:"",
        email:"",
        password:""
}


const UseStateWithObject = () =>{


    const [users , setUsers] = useState(userIfo)
    const {name, email, password} = users;


    const handleChange = e =>{
        const filedName = e.target.name;
        if(filedName === "name"){
            setUsers({name:e.target.value, email, password})
        }
        else if(filedName === "email"){
            setUsers({name, email:e.target.value, password})
        }
        else if(filedName === "password"){
            setUsers({name, email, password:e.target.value});
        }
    }


    const handleSubmit = e =>{
        e.preventDefault();
        console.log(users);
         
    }


    return(
       
        <form onSubmit={handleSubmit}>
        <section  >
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={handleChange} value={name} />
        </section>

        <section>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email"  onChange={handleChange}  value={email} />
        </section>

        <section>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password"  onChange={handleChange}  value={password} />
        </section>

        <button type="submit">Submit</button>
    </form>
    )
}

export default UseStateWithObject;