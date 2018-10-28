import React, { Component } from "react";

//Materia UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Centro de Notificaciones
                </Typography>
                </Toolbar>
            </AppBar>
        );
    };

}

export default Header;
