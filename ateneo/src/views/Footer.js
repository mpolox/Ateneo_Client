import React, { Component } from "react"
import { Toolbar, AppBar, Typography } from "@material-ui/core";

class Footer extends Component {
    render() {

        return (
            <AppBar position="bottom"  color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Centro de Notificaciones
                </Typography>
                </Toolbar>
            </AppBar>
        );
    }
};

export default Footer;