import React from "react";

import CardWithProps from "./CardWithProps";

const card = {
    cardTitle:"First Card",
    cardDesc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia dolores accusantium maxime esse itaque id, eos quae deserunt vero odit, quo, nesciunt alias porro adipisci fuga nostrum dolore?",
    cardDate:"6/16/2023"
}

const card2 = {
    cardTitle:"Second Card",
    cardDesc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia dolores accusantium maxime esse itaque id, eos quae deserunt vero odit, quo, nesciunt alias porro adipisci fuga nostrum dolore?",
    cardDate:"8/17/2023"
}

const card3 = {
    cardTitle:"Thrid Card",
    cardDesc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit mollitia dolores accusantium maxime esse itaque id, eos quae deserunt vero odit, quo, nesciunt alias porro adipisci fuga nostrum dolore?",
    cardDate:"9/17/2023"
}

const Index = () =>{
    return(
        <>
        <CardWithProps  card = {card} />
        <CardWithProps  card={card2} />
        <CardWithProps  card={card3} />
     
     

        </>
    )
}

export default Index;