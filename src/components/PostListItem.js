import React, { useState, useEffect } from "react";
import Switch from "react-switch";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const PostListItem = (props) => {
  const [comments, setComments] = useState([]);
  const [admin, setAdmin] = useState(false);

  const { post } = props;
  const [published, setPublished] = useState(post.published);
  const { title, timestamp_formatted, text, _id } = post;

  useEffect(() => {
    UserService.getComments(_id).then((result) => {
      setComments(result.data);

      const user = AuthService.getCurrentUser();
      if (user) {
        const roles = [];
        user.roles.map((role) => roles.push(role.name));
        setAdmin(roles.includes("ROLE_ADMIN"));
      }
    });
  }, [_id]);

  const handleClick = () => {
    window.location.href = `/posts/${_id}`;
  };

  const handleChange = () => {
    UserService.togglePublished(_id);
    setPublished(!published);
  };

  const CHAR_LIMIT = 100;
  const truncated_text =
    text.length >= CHAR_LIMIT ? text.substring(0, CHAR_LIMIT) + "..." : text;

  return (
    <div className="PostListItem">
      <div onClick={handleClick}>
        <h2>{title}</h2>
        <div>{timestamp_formatted}</div>
        <p>{truncated_text}</p>
        {comments.length === 1 ? (
          <div>1 comment</div>
        ) : (
          <div>{comments.length} comments</div>
        )}
      </div>
      {admin ? (
        <label>
          <Switch onChange={handleChange} checked={published} />
          <br />
          <span>{published ? "Published" : "Unpublished"}</span>
        </label>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PostListItem;
