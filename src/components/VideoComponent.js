import React from "react";

function VideoComponent({ id }) {
    return (
        <div className="p-5 m-5">
            <iframe
                width="960"
                height="540"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </div>
    );
}

export default VideoComponent;
