import React from "react";
import { Link } from "react-router-dom";

function VideoCard(props) {
    const { snippet, statistics, id } = props.data;
    const { thumbnails, title, channelTitle } = snippet;
    if (props.data)
        return (
            <Link to={`/watch?v=${id}`}>
                <div className=" p-2 m-2 w-72">
                    <img
                        alt="video-img"
                        className="rounded-lg"
                        src={thumbnails.medium.url}
                    />
                    <h1 className="text-sm py-1 font-semibold">{title}</h1>
                    <h1 className="text-sm">{channelTitle}</h1>
                    <div>
                        <h1 className="text-sm">
                            {Math.round(statistics.viewCount / 1000)}K
                        </h1>
                    </div>
                </div>
            </Link>
        );
}

export default VideoCard;
