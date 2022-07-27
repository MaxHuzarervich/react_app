import React from "react";
import classes from "./Post.module.css";

type postType = {
    message: string
    like: number
    dislike: number
}

export const Post = ({message, like, dislike}:postType) => {
    return (
        <div>
                <div className={classes.item}>
                    <img src='data:image/jpeg;base64,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'/>
                    <span>like: {like}</span><br/>
                    <span>dislike: {dislike}</span>
                    <h3>{message}</h3>
                </div>

        </div>
    )
}