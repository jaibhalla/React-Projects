import React from 'react'
import {useSelector} from 'react-redux'
import "../Pages/css/Pages.css"


const VideoPlayer = ({videoId}) =>{
    const queryHandler = useSelector(reducer=>reducer.videoListCalculation)

    return(
    <div className="Video-Main-Container">
        <div className="Video-Container">
            <iframe src = {"https://www.youtube.com/embed/" + videoId} class = "yt-player"/>
            <h2>{queryHandler.queryData.snippet.localized.title}</h2>
            <div className="second-line">
                <h3>{date(queryHandler.queryData.snippet.publishedAt)}</h3>
                <div className="reactions">
                    <div className="buttons">
                        <img src = {require("../images/thumbs-up.svg")} alt = "" id = "thumbs-up"/>
                        <h5>{conversion(queryHandler.queryData.statistics.likeCount)} </h5>
                        <img src = {require("../images/thumbs-down.svg")} alt = "" id = "thumbs-down"/>
                        <h5>{conversion(queryHandler.queryData.statistics.dislikeCount)}</h5>
                    </div>
                    <div className="lightBar"><div className="darkBar" style = {width(queryHandler.queryData.statistics.likeCount,queryHandler.queryData.statistics.dislikeCount)}></div></div> 
                </div>
            </div>
        </div>
        <div className="Description-Container">
            <div className="Channel-Details">
                <h1>{queryHandler.queryData.snippet.channelTitle}</h1>
                <p>{queryHandler.queryData.snippet.description}</p>
            </div>
        </div>
    </div>

    // Youtube Formatting: like, dislike, published at, viewCount, LightBar
)}

export default VideoPlayer

function conversion(number){
    
    if(Math.floor(number/1000000)>0){
        return Math.floor(number/1000000) + "M"
    }
    else if(Math.floor(number/1000)>0){
        return Math.floor(number/1000) + "K"
    }
    else{
        return number + ""
    }
} 

function width(like, dislike){
    let answer = like-dislike
    answer = answer/like
    answer = answer*100
    const final = answer + "%"
    return {width: final}
}

function date(value){    
    const year = value.slice(0,4)
    const day = value.slice(8,10)
    const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthsName[value.slice(5,7)-1]
    return month + " " + value.slice(8,10) + ", " + value.slice(0,4) 
}