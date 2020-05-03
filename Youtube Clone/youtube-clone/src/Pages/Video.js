import React from "react"
import axios from "axios"
import "./css/Pages.css"
import {useSelector, useDispatch} from 'react-redux'
import {findVideoList} from "../Actions"
import {VideoPlayer} from "../Components"

const Video =  (props) => {
    const queryHandler = useSelector(reducer=>reducer.videoListCalculation)
    const dispatch = useDispatch()
    let videoId = props.location.pathname.replace("/video/","")
    if(!queryHandler.done){
        axios.get("https://www.googleapis.com/youtube/v3/videos",{
            params: {
                part: "snippet, statistics",
                id: videoId,
                key: "AIzaSyAggV-OIQSpEBxHh7eLRm8NIMfN0tEtg1I"
            }
        })
        .then(Response => {
            dispatch(findVideoList(Response.data.items[0]))

        })
    }

    if(queryHandler.done)
        return(<VideoPlayer videoId = {videoId}/>)
    
    else
        return(<div>Loading</div>)
}

export default Video

