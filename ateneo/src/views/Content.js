import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class Content extends Component {

    constructor(){
        super();
        this.state = {
            nombre : "Pedro Paramo",
        };
    }

    render(){
        
        setTimeout(()=> {this.setState({nombre: "cositaaa"})}, 7000);
        setTimeout(()=> {this.setState({nombre: "Panchoooooooo"})}, 5000);

        const style = {
            Paper: { padding:20, margin:10, height:400 }
        }
               
        return(
            <Paper style={style.Paper}>{this.state.nombre}</Paper>
        );
    }
}

export default Content;