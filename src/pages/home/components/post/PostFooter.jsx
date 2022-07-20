import { useState } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CommentList from "../../../../common/comment/Comments";

function PostFooter({ post }) {
  const [likeStatus, setLikeStatus] = useState(post.liked);
  const [postLike, setPostLikes] = useState(post.likes);

  const addReaction = () => {
    if (!likeStatus) {
      setLikeStatus(true);
      setPostLikes(postLike + 1);
    } else {
      setLikeStatus(false);
      setPostLikes(postLike - 1);
    }
  };

  return (
    <div className="post-card__footer">
      <div className="post-card__footer-couts">
        <div className="ractions">
          <Link to="/">
            Sabekun Nahar Rima, Samiul Hasan and {postLike} others
          </Link>
        </div>
        <div className="comments">
          <Link to="/">{post.comments?.length} Comments</Link>
        </div>
      </div>

      <div className="post-card__footer-actions">
        <button
          onClick={addReaction}
          className={`btn post-card__footer-actions-btn ${
            likeStatus && "liked"
          }`}>
          <div className="icon">
            {likeStatus ? <AiTwotoneLike /> : <AiOutlineLike />}
          </div>
          Like
        </button>
        <button className="btn post-card__footer-actions-btn">
          <div className="icon">
            <GoComment />
          </div>
          Comment
        </button>
        <button className="btn post-card__footer-actions-btn">
          <div className="icon">
            <RiShareForwardLine />
          </div>
          Share
        </button>
      </div>

      <CommentList comments={post.comments} />
    </div>
  );
}

export default PostFooter;
