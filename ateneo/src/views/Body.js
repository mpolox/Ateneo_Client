import React, { Component } from "react";
import { Grid} from "@material-ui/core";
import AppMenu from "./AppMenu";
import Content from "./Content";



class Body extends Component {

    render(){
        return(
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <AppMenu/>
                </Grid>
                <Grid item xs={9}>
                    <Content data="Mis datos"/>
                </Grid>
            </Grid>
        );
    };

}

export default Body;
