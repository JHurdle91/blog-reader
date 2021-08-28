import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPost } from "../data/source/blogApi";

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

  const { id } = useParams();

  useEffect(() => {
    const pullPost = async () => {
      setPost(await getPost(id));
    };
    pullPost();
  }, [id]);

  let { title, timestamp, text, user } = post;
  return (
    <div className="PostDetail">
      <h1>{title}</h1>
      <div>- {user.username}</div>
      <div>{timestamp}</div>
      <hr />
      <div>{text}</div>
      <hr />
      <div>TODO: add comments</div>
      <div>TODO: display comments</div>
    </div>
  );
};

export default PostDetail;
