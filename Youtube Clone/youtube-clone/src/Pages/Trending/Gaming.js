import React from 'react'
import axios from 'axios'
import '../css/Pages.css'
import VideoListLong from '../../Components/VideoListLong'
import { useDispatch , useSelector } from 'react-redux'
import {findVideoList} from '../../Actions' 


function Gaming(){
    const dispatch = useDispatch()
    const getQuery = useSelector(reducer => reducer.videoListCalculation)

    if(!getQuery.done){
        axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part: "snippet",
                chart: "mostPopular",
                maxResults: 5,
                regionCode: "ae",
                videoCategoryId: 20,
                key: "AIzaSyAggV-OIQSpEBxHh7eLRm8NIMfN0tEtg1I"
            }
        })
        .then((Response) => {
            console.log(Response.data.items)
            dispatch(findVideoList(Response.data.items))
        })
    }

    const videos = getQuery.done?getQuery.queryData.map(video => { 
        return(
            <VideoListLong title = {video.snippet.title}  channelTitle = {video.snippet.channelTitle} description = {video.snippet.description}  imageURL = {video.snippet.thumbnails.high.url}  etag = {video.etag}  publishedAt = {video.snippet.publishedAt}/>
        )
    }):<div>Loading</div>
        
    return(
        <div className = "Body-Container">
            <div className = "Trending-Main-Container">
                {videos}
            </div>
        </div>
    )
}

export default Gaming 






