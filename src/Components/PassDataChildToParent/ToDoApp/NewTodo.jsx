import React, { useState } from "react";

const NewTodo = ({onData}) =>{
    const [todo, setTodo] = useState("");


    const handleData = e =>{
        setTodo(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        onData(todo);
         
    }

   

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" onChange={handleData} value={todo} />
            <button type="submit">Submit</button>

        </form>
    )
}

export default NewTodo;