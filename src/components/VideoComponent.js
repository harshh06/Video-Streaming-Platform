import React from "react";
import channel from "../assets/user.png";

function VideoComponent({ video }) {
    console.log(video);
    const { snippet, statistics, id } = video;
    return (
        <div className="p-5 mt-5 mx-5">
            <iframe
                width="960"
                height="540"
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            <div className=" py-2 my-2">
                <h1 className="text-xl font-semibold">{snippet?.title}</h1>
                <div className="flex py-2 my-2">
                    <img alt="channel" src={channel} className="h-10 w-10" />
                    <h1 className="text-base mx-2 my-2 font-semibold">
                        {snippet?.channelTitle}
                    </h1>
                    <button className="px-3 mx-5 w-26 h-10 text-sm border border-black rounded-full bg-black text-white font-semibold">
                        Subscribe
                    </button>
                    <button className="px-3 ml-64  w-28 h-10 text-sm border  rounded-l-full bg-gray-100 text-black font-semibold">
                        Likes {""}
                        {Math.round(statistics?.likeCount / 1000)} k
                    </button>
                    <button className="p  w-16 h-10 text-sm border  rounded-r-full bg-gray-100 text-black font-semibold">
                        Dislike
                    </button>
                    <button className="px-3 ml-5  w-28 h-10 text-sm border  rounded-full bg-gray-100 text-black font-semibold">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoComponent;
