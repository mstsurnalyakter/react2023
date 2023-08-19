import React, { memo } from "react";

const StateLiftign = ({title, onHnanleChildData}) =>{
    const child = "Hello! I am child data";

    onHnanleChildData(child);
    return(
        <section>
            <h1>{title}</h1>
        </section>
    )
}

export default memo(StateLiftign);

