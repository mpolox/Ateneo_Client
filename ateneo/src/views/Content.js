import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class Content extends Component {
    render(){
        const style = {
            Paper: { padding:20, margin:10, height:400 }
        }
                
        return(
            <Paper style={style.Paper}>My Body</Paper>
        );
    }
}

export default Content;