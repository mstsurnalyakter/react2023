import React from "react";
import { userInfo } from "./Data";

const Maping = () =>{
    return(
       <section>
        {userInfo.map((item, index) =>{

            return(
                <article key={index}>
                    <h2>Name: {item.name}</h2>
                    <h2>Id: {item.id}</h2>
                    {item.phone.map((value, index) =>{
                        return(
                            <section key={index}>
                                <h3>Home: {value.home}</h3>
                                <h3>Office: {value.office}</h3>
                            </section>
                        )
                    })}
                </article>
            )
        })}
       </section>
    )
}

export default Maping;