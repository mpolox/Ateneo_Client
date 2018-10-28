import React, { Component } from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import Massage from '@material-ui/icons/Message';
import CloudUpload from '@material-ui/icons/CloudUpload';

class AppMenu extends Component {
    render() {
        return (
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <Massage />
                    </ListItemIcon>
                    <ListItemText primary="Crear notificación" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CloudUpload />
                    </ListItemIcon>
                    <ListItemText primary="Enviar notificación" />
                </ListItem>
            </List>
        );
    }
}

export default AppMenu;