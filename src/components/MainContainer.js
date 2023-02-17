import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openSideBar } from "../utils/sideBarSlice";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";

const MainContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openSideBar());
    }, [dispatch]);

    return (
        <div>
            <ButtonList />
            <VideoList />
        </div>
    );
};

export default MainContainer;
