import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const todoData = ["item1" , "item2"];

const Home = () =>{
    const [todoDatas, setTodoDatas] = useState(todoData);

    const  handleData = data => {
      setTodoDatas([...todoDatas, data])
    }

    return(
        <section className="card">
            <NewTodo onData={handleData} />
            <Todos todoDatas = {todoDatas} />
        </section>
    )
}


export default Home;