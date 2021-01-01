import React, {useState,useEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Slidebar.css"
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import main from "./main.jpg"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import  CallIcon from "@material-ui/icons/Call";
import {Avatar} from "@material-ui/core";
import MicIcon  from "@material-ui/icons/Mic"
import  HeadsetIcon from "@material-ui/icons/Headset"
import  SettingsIcon from "@material-ui/icons/Settings"
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux";
import db, { auth } from './firebase';
function Slidebar() {
    const user =  useSelector(selectUser);
    const [channels, setchannels] = useState([])

    useEffect(() => {
       db.collection('channels').onSnapshot(snapshot => 
           setchannels(snapshot.docs.map(doc => ({
                id:doc.id,
                channel: doc.data(),
           })))
       )
        }
    , []);
    const handleAddChange = () => {
        const channelName = prompt("Enter a new channel Name")
        if(channelName){
            db.collection("channels").add({
                channelName:channelName
            })
        }
    }
    return (
        <div className="slidebar">
          
            
            <div className="slidebar__top">
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>
            <div className="slidebar__channels">
                <div className="slidebar__channelsHeader">
                    <div className="slidebar__header">
                        <ExpandMoreIcon />
                        <h4>Add Channels</h4>
                    </div>
                    <AddIcon onClick = {handleAddChange} className="slidebar__addChannel" />
                </div>
                <div className="slidebar__channelsList">
               
               {channels.map(({id,channel}) => (
                 <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
               ))}
            </div>
            </div>

            <div className="slidebar__voice">
                <SignalCellularAltIcon 
                    className="slidebar__voiceIcon"
                    fontSize="large"
                />
           
            <div className="slidebar__voiceinfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>

            <div className="slidebar__voiceIcons">
                <InfoOutlinedIcon />
                <CallIcon />
            </div>
        </div>

        <div className="slidebar__profile">
            <Avatar onClick={() => auth.signOut()} src={user.photo}/>
            <div className="slidebar__profileInfo">
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)}</p>
            </div>
            <div className="slidebar__profileIcons">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
         </div>
    )
}

export default Slidebar
