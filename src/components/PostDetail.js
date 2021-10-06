import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Comments from "./Comments";
import CommentForm from "./CommentForm";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const PostDetail = () => {
  const [post, setPost] = useState({
    title: "",
    timestamp: "",
    text: "",
    user: {
      username: "",
      password: "",
    },
  });
  const [currentUser, setCurrentUser] = useState(undefined);

  const { postId } = useParams();

  useEffect(() => {
    UserService.getPost(postId).then((response) => {
      setPost(response.data);
    });

    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, [postId]);

  let { title, timestamp, text, user } = post;
  return (
    <div className="PostDetail">
      <h1>{title}</h1>
      <div>- {user.username}</div>
      <div>{timestamp}</div>
      <hr />
      <div>{text}</div>
      <hr />
      <h2>Comments</h2>
      {currentUser ? (
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
