import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Switch from "react-switch";

import Comments from "./Comments";
import CommentForm from "./CommentForm";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const PostDetail = () => {
  const [admin, setAdmin] = useState(false);
  const [post, setPost] = useState({
    title: "",
    timestamp: "",
    timestamp_formatted: "",
    text: "",
    published: false,
    user: {
      username: "",
      password: "",
    },
  });
  const [published, setPublished] = useState(post.published);

  const { postId } = useParams();

  useEffect(() => {
    UserService.getPost(postId).then((response) => {
      setPost(response.data);
    });

    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setAdmin(roles.includes("ROLE_ADMIN"));
    }
  }, [postId]);

  useEffect(() => {
    setPublished(post.published);
  }, [post]);

  const handleChange = () => {
    UserService.togglePublished(postId);
    setPublished(!published);
  };

  const handleClick = () => {
    UserService.deletePost(postId).then(() => {
      window.location.href = `/posts/`;
    });
  };

  let { title, timestamp_formatted, text, user } = post;

  return (
    <div className="PostDetail">
      <h1>{title}</h1>
      <div>- {user.username}</div>
      <div>{timestamp_formatted}</div>
      {admin ? (
        <div>
          <label>
            <Switch onChange={handleChange} checked={published} />
            <br />
            <span>{published ? "Published" : "Unpublished"}</span>
          </label>
          <br />
          <button className="btn btn-danger" onClick={handleClick}>
            Delete Post
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <hr />
      <div>{text}</div>
      <hr />
      <h2>Comments</h2>
      {user ? (
        <CommentForm />
      ) : (
        <div>
          <br />
          <Link to={"/login"}>
            <strong>Log in</strong>
          </Link>{" "}
          to leave a comment.
          <br />
          <br />
        </div>
      )}
      <Comments />
    </div>
  );
};

export default PostDetail;
