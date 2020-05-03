import React from "react";
import "../css/VideoListLong.css";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux"
import {submitQuery} from '../Actions'

const VideoListLong = ({
  title,
  channelTitle,
  description,
  imageURL,
  etag,
  publishedAt,
  id,
}) => {
  const dispatch =  useDispatch()  
  return (
    <NavLink to={"/video/" + id}>
      <div className="Video-Card" key={etag} onClick={()=>dispatch(submitQuery(id))}>
        <div className="Picture">
          <img src={imageURL} alt="" />
        </div>
        <div className="Text">
          <h1>{title}</h1>
          <h2>
            {channelTitle} • {timePosted(publishedAt)}
          </h2>
          <span>
            <h3>{description}</h3>
          </span>
        </div>
      </div>
    </NavLink>
  );
};
export default VideoListLong;

const timePosted = (videoTime) => {
  let videoYear = videoTime.slice(0, 4);
  let videoMonth = videoTime.slice(5, 7);
  let videoDay = videoTime.slice(8, 10);
  let timeElapsed = new Date().getTime() - new Date(videoYear, videoMonth, videoDay).getTime();
  timeElapsed = Math.floor(timeElapsed / 31536000000); //Years
  if (timeElapsed > 0){
    return timeElapsed + " years ago";
  }
  else {
    timeElapsed = Math.floor(timeElapsed / 2592000); //Months
    if (timeElapsed > 0)
      return timeElapsed + " months ago";
    else {
      timeElapsed = Math.floor(timeElapsed / 86400); //Days
      if (timeElapsed > 0) return timeElapsed + " days ago";
      else return "Today";
    }
  }
};
