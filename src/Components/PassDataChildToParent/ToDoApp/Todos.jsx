import React from "react";
import Todo from "./Todo";

const Todos = ({todoDatas}) =>{
    return(
        <section>
            {todoDatas.map((data, index) => <Todo key={index} data = {data} /> )}
            
        </section>
    )
}

export default Todos;