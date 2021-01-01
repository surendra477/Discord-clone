import React,{useState,useEffect} from 'react'
import "./Chat.css"
import ChatHeader from './ChatHeader';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/AddCircle";
import Message from './Message';
import { selectUser } from './features/userSlice';
import {useSelector} from "react-redux"
import { selectchannelId, selectchannelName } from './features/appSlice';
import db from './firebase';
import firebase from "firebase"
function Chat() {
const [input, setinput] = useState("");
const [messages , setMessages] = useState([]);
    const user = useSelector(selectUser);
    const channelId = useSelector(selectchannelId)
    const channelName = useSelector(selectchannelName)
    useEffect(() => {
       if(channelId)
       {
           db.collection("channels").doc(channelId).collection('messages').orderBy("timestamp","desc").onSnapshot((snapshot) => 
           setMessages(snapshot.docs.map((doc) => doc.data())))
       }
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
    db.collection("channels").doc(channelId).collection('messages').add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    message:input,
    user:user
})
setinput("")
    }
    return (
        <div className="chat">
           
            <ChatHeader channel={channelName}/>
            <div className="chat__messages">
               
                {messages.map((message) => (
                     <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                     />
                ))}
            </div>
            <div className="chat__input">
               <AddCircleIcon fontSize="larger" />
               <form>
                   <input value = {input} placeholder={`Message #${channelName}`}
                    disabled={!channelId}
                    onChange={(e) => setinput(e.target.value)}
                   />
                   <button onClick={sendMessage}   disabled={!channelId}className="chat__inputButton" type="submit">Send Message</button>
               </form>
               <div className="chat__inputIcons">
                   <CardGiftcardIcon fontSize="large" />
                   <GifIcon fontSize="large" />
                   <EmojiEmotionsIcon fontSize="large" />
               </div>
            </div>
        </div>
    )
}

export default Chat
