import React from "react";

const Child = ({parent, onHnadle}) =>{
    const text = "I am text from Children";
    onHnadle(text);

    return(
        <section>
            <h2>{parent}</h2>
        </section>
    )
}

export default Child;