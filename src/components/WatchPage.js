import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import VideoComponent from "./VideoComponent";
import { useSearchParams } from "react-router-dom";
import { YT_KEY } from "../const";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    const getVideo = React.useCallback(async () => {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
                "v"
            )}&key=${YT_KEY}`
        );
        const json = await data.json();
        setVideo(json.items[0]);
    }, [searchParams]);

    useEffect(() => {
        getVideo();
        dispatch(closeSideBar());
    }, [dispatch, getVideo]);

    const [video, setVideo] = useState({});
    // console.log(video);
    if (video === {}) return <></>;
    return (
        <div className="w-full">
            <div className="flex w-full">
                <VideoComponent video={video} />
                <LiveChat className=" " />
            </div>

            <CommentsContainer className="w-1/2" />
        </div>
    );
}

export default WatchPage;
