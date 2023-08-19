import React from "react";

const DataAddWithCard = (props) =>{
    const {cardTitle, cardDesc, cardDate} = props
    
    return(
        <section className="card">

       
            <h3 className="cardTitle">{cardTitle}</h3>
            <p className="cardDesc">{cardDesc}</p>
            <p className="cardDate">{cardDate}</p>
        </section>
    )
}

export default DataAddWithCard;