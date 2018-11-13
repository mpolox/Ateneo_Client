import React, { Component } from "react";
import Createnotification from "./CreateNotication";
import SendNotification from "./SendNotification";

class Content extends Component {


    render(){
        
        let myOption;

        if (this.props.data === "ENVIAR") {
            myOption = <SendNotification></SendNotification>;
        } else {            
            myOption = <Createnotification></Createnotification>;
        }
               
        return(
            <div>
                {myOption}
            </div>
        );
    }
}

export default Content;