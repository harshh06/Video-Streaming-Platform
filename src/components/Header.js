import React from "react";
import icon from "../assets/icon.png";
import ytIcon from "../assets/yt.jpeg";
import user from "../assets/user.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
function Header() {
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSideBar());
    };

    return (
        <div className=" shadow-lg grid grid-flow-col ">
            <div className="flex  col-span-1 p-2 m-2">
                <button onClick={toggle}>
                    <img alt="sidebar-icon" className="h-10" src={icon} />
                </button>

                <img alt="yt-icon" className="h-10 " src={ytIcon} />
            </div>
            <div className="col-span-10 py-4  m-2">
                <input className="border w-1/2" type="text" />
                <button className="border">Search</button>
            </div>
            <div className="p-2 m-2">
                <img alt="user-icon" className="h-8" src={user} />
            </div>
        </div>
    );
}

export default Header;
