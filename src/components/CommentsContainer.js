import React from "react";
import user from "../assets/user.png";

const commentsData = [
    {
        name: "Harsh",
        text: "First Comment",
        replies: [
            {
                name: "Harsh",
                text: "Reply Comment",
                replies: [],
            },
            {
                name: "Harsh",
                text: "Reply Comment",
                replies: [],
            },
            {
                name: "Harsh",
                text: "Reply Comment",
                replies: [],
            },
        ],
    },
    {
        name: "Harsh",
        text: "First Comment",
        replies: [],
    },
    {
        name: "Harsh",
        text: "First Comment",
        replies: [
            {
                name: "Harsh",
                text: "Reply Comment",
                replies: [
                    {
                        name: "Harsh",
                        text: "Reply Comment",
                    },
                    {
                        name: "Harsh",
                        text: "Reply Comment",
                    },
                ],
            },
            {
                name: "Harsh",
                text: "Reply Comment",
                replies: [],
            },
        ],
    },
    {
        name: "Harsh",
        text: "First Comment",
        replies: [],
    },
    {
        name: "Harsh",
        text: "First Comment",
        replies: [],
    },
];

const Comment = ({ text, name }) => {
    return (
        <div className="flex p-2  m-2 bg-gray-100 rounded-lg">
            <div className="mx-2 py-1">
                <img alt="user" src={user} className="w-8 h-8 rounded-full" />
            </div>
            <div className="py-1">
                <h1 className="text-sm font-semibold">{name}</h1>
                <h1 className="text-sm">{text}</h1>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments?.map((comment, id) => {
        const name = comment.name;
        const text = comment.text;
        const replies = comment.replies;
        return (
            <div key={id} className="my-5">
                <Comment name={name} text={text} />
                <div className="pl-8 border-l-2">
                    <CommentsList comments={replies} />
                </div>
            </div>
        );
    });
};

const CommentsContainer = () => {
    return (
        <div className="px-5 mx-5 ">
            <h1 className="font-semibold ">Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
