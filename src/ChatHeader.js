import React from 'react'
import "./ChatHeader.css"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";

import SendRoundedIcon from "@material-ui/icons/SendRounded";

import HelpRoundedIcon from "@material-ui/icons/HelpRounded" 
function ChatHeader({channel}) {
    return (
        <div className="chatHeader">
           
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">
                    #
                </span>
               {channel}
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input type="text" placeholder="search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
