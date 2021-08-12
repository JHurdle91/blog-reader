import uniqid from "uniqid";

import { useState, useEffect } from "react";

import { getPosts } from "../data/source/blogApi";
import PostDetail from "./PostDetail";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const pullPosts = async () => {
      setPosts(await getPosts());
    };
    pullPosts();
  }, []);

  return (
    <div className="PostList">
      {posts.map((post) => {
        const { title, timestamp, text } = post;
        return (
          <PostDetail
            key={uniqid()}
            title={title}
            timestamp={timestamp}
            body={text}
            nComments={5}
          />
        );
      })}
    </div>
  );
};

export default PostList;
