import React from "react";
import user from "../assets/user.png";
const ChatMessage = ({ name, text }) => {
    return (
        <div className="">
            <div className="px-2 m-2 flex shadow-lg rounded-md bg-white">
                <img alt="user-icon" className="h-6 my-1" src={user} />
                <div className="px-1 mx-1">
                    <h1 className="font-semibold text-sm">{name}</h1>
                    <h1 className="text-sm">{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
