import React from "react";
import { useParams } from "react-router-dom";

import UserService from "../services/user.service";

const Comment = (props) => {
  const { timestamp, text, commentAuthor, currentUser, admin, reloadComments } =
    props;
  const commentId = props.id;
  const { postId } = useParams();

  const handleClick = () => {
    UserService.deleteComment(postId, commentId).then(() => {
      reloadComments();
    });
  };

  return (
    <div className="Comment">
      <div>
        <strong>{commentAuthor.username}</strong>
      </div>
      <div>{timestamp}</div>
      <br />
      <div>{text}</div>
      {currentUser && (currentUser._id === commentAuthor._id || admin) ? (
        <button className="btn btn-danger" onClick={handleClick}>
          Delete Comment
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Comment;
