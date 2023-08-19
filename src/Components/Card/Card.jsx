import React from "react";
const todoTitle = "First todo App";
const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia dolores accusantium maxime esse itaque id, eos quae deserunt vero odit, quo, nesciunt alias porro adipisci fuga nostrum dolore?";
const date = "8/16/2023";

const Card = () =>{
    return(
        <section className="card">
            <h3 className="cardTitle">{todoTitle}</h3>
            <p className="cardDesc">{desc}</p>
            <p className="cardDate">{date}</p>
        </section>
    )
}

export default Card;