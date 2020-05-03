import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { findVideoList } from "../Actions";
import VideoListLong from "../Components/VideoListLong";

import "./css/Pages.css";

function Search() {
  const getQuery = useSelector((reducer) => reducer.videoListCalculation);
  const dispatch = useDispatch();

  if (!getQuery.done) {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyAggV-OIQSpEBxHh7eLRm8NIMfN0tEtg1I",
          q: getQuery.query,
        },
      })
      .then((Response) => {
        console.log(Response.data.items);
        dispatch(findVideoList(Response.data.items));
      });
  }

  let vidoes = getQuery.done ? (
    getQuery.queryData.map((video) => {
      return (
        <VideoListLong
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          description={video.snippet.description}
          imageURL={video.snippet.thumbnails.high.url}
          etag={video.etag}
          publishedAt={video.snippet.publishedAt}
          id={video.id.videoId}
        />
      );
    })
  ) : (
    <div></div>
  );

  return (
    <div className="Body-Container">
      <div className="Search-Main-Container">{vidoes}</div>
    </div>
  );
}

export default Search;
