import React, { Component } from 'react'
import { Paper } from '@material-ui/core';


class SendNotification extends Component {
    render() {
        const style = {
            Paper: { padding:20, margin:10}
        }
        
        return (            
            <Paper style={style.Paper}>
                <div>
                    Send Notification
                </div>
            </Paper>
        );
    }
}

export default SendNotification;