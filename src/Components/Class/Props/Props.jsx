import React, { Component } from "react";

class Props extends Component{
    render(){
        return(
            <section>
                <h2>FullName: {this.props.name}</h2>
                <h2>Id: {this.props.id}</h2>
            </section>
        )
    }
}

export default Props;