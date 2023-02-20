import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";
import generateRandomName from "../helper.js";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [textMessage, setTextMessage] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    text: "Live chat message",
                })
            );
        }, 2000);
        return () => clearInterval(interval);
    });

    return (
        <div className="px-5 py-2 mt-8 w-full h-[580px] bg-gray-50 rounded-lg mx-5 border overflow-y-scroll text-center">
            <h1 className="py-1 border-b border-black font-semibold">
                Live Chat
            </h1>
            <div className="mt-1 w-full h-[480px] bg-gray-50 rounded-lg  overflow-y-scroll flex flex-col-reverse text-left">
                {chatMessages.map((msg, id) => (
                    <ChatMessage key={id} name={msg.name} text={msg.text} />
                ))}
            </div>
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    setTextMessage("");
                }}>
                <input
                    className="w-full h-10 rounded-full border p-2"
                    type="text"
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                />
                <button
                    className="p-2  w-16 h-10 text-sm border  rounded-full bg-gray-100 text-black font-semibold hover:bg-gray-200 focus:ring-2 "
                    onClick={() =>
                        dispatch(
                            addMessage({
                                name: "Harsh",
                                text: textMessage,
                            })
                        )
                    }>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LiveChat;
