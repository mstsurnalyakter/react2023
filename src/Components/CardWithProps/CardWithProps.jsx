import React from "react";

const CardWithProps = ({card}) =>{
    return(
        <section className="card">
            <h3 className="cardTitle">{card.cardTitle}</h3>
            <p className="cardDesc">{card.cardDesc}</p>
            <p className="cardDate">{card.cardDate}</p>
        </section>
    )
}


export default CardWithProps;