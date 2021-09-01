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
        const { title, timestamp, text, _id } = post;
        return (
          <div key={uniqid()}>
            <PostListItem
              id={_id}
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
