import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Body() {
    const open = useSelector((store) => store.sideBar.open);

    return (
        <div className="flex">
            {open ? <SideBar /> : ""}
            <Outlet />
        </div>
    );
}

export default Body;
