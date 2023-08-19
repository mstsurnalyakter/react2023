import React, { useState } from 'react'

export const TaskList = ({todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul>
        {todos.map(todo =>{
            return(
                 <li key={todo.id}>
                <Task 
                    todo={todo}
                   onChange = {onChangeTodo}
                   onDelete = {onDeleteTodo}
                />
            </li>
            )
        })}
    </ul>
  )
}

 
 
  const Task = ({todo, onChange, onDelete}) => {

    const [isEditing, setIsEditing] = useState(false);

    let todoContent;

    if(isEditing){
        todoContent = (
            <>
                <input 
                    value={todo.title}
                     onChange={e =>{
                        onChange({
                            ...todo,
                            title:e.target.value
                        })
                     }}
                />

                     <button onClick={() => setIsEditing(false)}>
                        Save
                     </button>

            </>
        )
    }else{
        todoContent = (
            <>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>
                Edit
            </button>
            </>
        )
    }



   return (
     <label>
        <input 
            type='checkbox'
            checked={todo.done}
            onChange={ e =>{
                onChange({
                    ...todo,
                    done:e.target.checked
                })
            }}
        />
        {todoContent}
        <button onClick={() => onDelete(todo.id)}>
            Delete
        </button>
     </label>
   )
 }
 

 