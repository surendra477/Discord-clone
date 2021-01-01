import React from 'react'
import {useDispatch} from "react-redux"
import { setChannelInfo } from './features/appSlice'
import "./SidebarChannel.css"
function SidebarChannel({id,channelName}) {
    const dispatch = useDispatch()
    return (
        <div className="slidebarChannel" onClick={() => dispatch (setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4>
                <span className="slidebarChannel__hash">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
