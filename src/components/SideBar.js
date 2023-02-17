import React from "react";

function SideBar() {
    return (
        <div className="border border-r-1 h-screen px-10 py-5 mr-2 w-52 ">
            <ul className="">
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
                <li>Library</li>
                <li>History</li>
                <li>Your Videos</li>
            </ul>
        </div>
    );
}

export default SideBar;
