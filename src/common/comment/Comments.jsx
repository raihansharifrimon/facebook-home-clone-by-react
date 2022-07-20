import React from "react";
import CommentItem from "./CommentItem";
import "./Comments.scss";
import CommentInput from "./CommnetInput";

function Comments({ comments }) {
  return (
    <div className="comment">
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <CommentItem key={comment.created_at} comment={comment} />
        ))}
      <CommentInput />
    </div>
  );
}

export default Comments;
