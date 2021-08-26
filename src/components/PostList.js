import uniqid from "uniqid";

import { useState, useEffect } from "react";

import { getPosts } from "../data/source/blogApi";
import PostListItem from "./PostListItem";

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
          <div>
            <PostListItem
              key={uniqid()}
              title={title}
              timestamp={timestamp}
              body={text}
              nComments={5}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
