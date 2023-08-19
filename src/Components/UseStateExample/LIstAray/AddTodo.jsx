import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [title, setTitle] = useState("");

    const handleClick = () =>{
        setTitle("");
        onAddTodo(title);
    }

  return (
    <>
        <input
        placeholder='Add todo'
         value={title}
         onChange={e => setTitle(e.target.value)}
         />
         <button 
            onClick={handleClick}>
            Add
         </button>
    </>
  )
}


export default AddTodo