import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPost } from "../data/source/blogApi";
import Comments from "./Comments";

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

  const { postId } = useParams();

  useEffect(() => {
    const pullPost = async () => {
      setPost(await getPost(postId));
    };
    pullPost();
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
      <Comments />
    </div>
  );
};

export default PostDetail;
