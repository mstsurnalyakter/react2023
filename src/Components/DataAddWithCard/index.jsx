import React from "react";
import DataAddWithCard from "./DataAddWithCard";
import Data from "./data.json"
 
 

const Index = () =>{
    
    return(
          <section>
                {Data.map((item, index) => <DataAddWithCard cardTitle={item.cardTitle} cardDesc={item.cardDesc} cardDate={item.cardDate} key={index} />)}
          </section>
    )
}

export default Index;