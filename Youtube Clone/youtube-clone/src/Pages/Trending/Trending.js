import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import '../css/Pages.css'
import VideoListLong from '../../Components/VideoListLong'
import {useDispatch,useSelector} from 'react-redux'
import {submitQuery, findVideoList} from '../../Actions' 


function Trending(){
    const categories = ['Music',"Gaming"]
    const dispatch = useDispatch()
    const getQuery = useSelector(reducer => reducer.videoListCalculation)
    if(!getQuery.done){
        axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part: "snippet",
                chart: "mostPopular",
                maxResults: 5,
                regionCode: "ae",
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

    const icons = categories.map((category,index) =>{
        return(
            <NavLink to = {`/trending/${category}`} onClick = {() => dispatch(submitQuery(`${category}`))}>
                <div className = "Icon-Container" key = {index}>
                    <img src={require(`../../images/${category}.png`)} alt = ""/>
                    <h1>{category}</h1>
                </div>
            </NavLink>            
        )
    })
        
    return(
        <div className = "Body-Container">
            <div className = "Trending-Main-Container">
                <div className = "Category-Icon-Container">
                    {icons}
                </div>
                
                <div className = "Video-List-Container">
                    {videos}
                </div>
                <div className = "Line-Divide"></div>
            </div>
        </div>
    )
}

export default Trending 
