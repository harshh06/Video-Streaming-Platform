import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import VideoComponent from "./VideoComponent";
import { useSearchParams } from "react-router-dom";
import { YT_KEY } from "../const";

function WatchPage() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        getVideo();
        dispatch(closeSideBar());
    });

    const [video, setVideo] = useState({});

    const getVideo = async () => {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
                "v"
            )}&key=${YT_KEY}`
        );
        const json = await data.json();
        setVideo(json.items[0]);
    };
    if (video === {}) return <></>;
    return (
        <div>
            <VideoComponent
                id={video.id}
                width={video.snippet?.thumbnails?.standard?.widht}
                height={video.snippet?.thumbnails?.standard?.height}
            />
        </div>
    );
}

export default WatchPage;
