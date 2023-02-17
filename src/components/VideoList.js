import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YT_API } from "../const.js";
import Shimmer from "./Shimmer";
function VideoList() {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YT_API);
        const json = await data.json();
        setVideoData(json.items);
    };
    if (videoData.length === 0) return <Shimmer />;
    else
        return (
            <div className="m-2 py-5 border flex flex-wrap">
                {videoData.map((video) => {
                    return <VideoCard key={video.id} data={video} />;
                })}
            </div>
        );
}

export default VideoList;
