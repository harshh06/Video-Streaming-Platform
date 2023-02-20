import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YT_KEY } from "../const";
import VideoCard from "./VideoCard";

function VideoListQuery() {
    const [videos, setVideos] = useState([]);
    const [searchQuery] = useSearchParams();
    console.log(searchQuery.get("v"));
    useEffect(() => {
        fetchVideosBySearch();
    }, [searchQuery]);

    const fetchVideosBySearch = async () => {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery.get(
                "v"
            )}&key=${YT_KEY}`
        );
        const json = await data.json();
        setVideos(json.items);
        // console.log(json);
    };

    return (
        <div className="flex justify-between flex-wrap">
            {videos?.map((video, id) => {
                // const id = video.id.videoId;
                return <VideoCard key={id} data={video} />;
            })}
        </div>
    );
}

export default VideoListQuery;
