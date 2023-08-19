import React, { useState } from 'react'
import AddTodo from './AddTodo';
import { TaskList } from './TaskList';

let nextId = 3;

const initialTodos = [
    {id:0, title:"Buy milk", done:true},
    {id:1, title:"Eat tacos", done:false},
    {id:2, title:"Brew tea", done:false}
];

const Add2 = () => {

    const [todos, setTodos] = useState(initialTodos);

    // New Data add from AddTodo.jsx file

    const handleAddTodo = title =>{
        setTodos([
            ...todos,
            {
                id:nextId++,
                title:title,
                done:false
            }
        ]);
    }

    // change data

    const handleChangeTodo = nextTodo =>{
        setTodos(todos.map(t =>{
            if(t.id === nextTodo.id){
                return nextTodo;
            }else{
                return t;
            }
        }));
    }

    
    // delete data

    const handleDeleteTodo = todoId =>{
            setTodos(
                todos.filter(t => t.id !== todoId)
            );
    }


  return (
    <>
        <AddTodo onAddTodo={handleAddTodo} />

        <TaskList 
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        />
    </>
  )
}

export default Add2