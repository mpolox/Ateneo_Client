import React, { Component } from "react";
import { Grid} from "@material-ui/core";
import AppMenu from "./AppMenu";
import Content from "./Content";



class Body extends Component {

    state = {
        tipo: "This is the default message"
    }

    handleCrear = () => {
        this.setState({
            tipo: "CREAR"
        });
    }

    handleEnviar = () => {
        this.setState({
            tipo: "ENVIAR"
        });
    }

    render(){
        return(
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <AppMenu 
                        tipo={this.state.tipo} 
                        handleCrear={this.handleCrear}
                        handleEnviar={this.handleEnviar}/>
                </Grid>
                <Grid item xs={9}>
                    <Content data={this.state.tipo}/>
                </Grid>
            </Grid>
        );
    };

}

export default Body;
