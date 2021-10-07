import { useState, useEffect } from "react";

import UserService from "../services/user.service";

const PostListItem = (props) => {
  const { title, timestamp_formatted, text, _id } = props.post;

  const [comments, setComments] = useState([]);
  useEffect(() => {
    UserService.getComments(_id).then((result) => {
      setComments(result.data);
    });
  }, [_id]);

  const handleClick = () => {
    window.location.href = `/posts/${_id}`;
  };

  return (
    <div className="PostListItem" onClick={handleClick}>
      <h2>{title}</h2>
      <div>{timestamp_formatted}</div>
      <p>{text}</p>
      {comments.length === 1 ? (
        <div>1 comment</div>
      ) : (
        <div>{comments.length} comments</div>
      )}
    </div>
  );
};

export default PostListItem;
