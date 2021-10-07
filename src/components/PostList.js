import uniqid from "uniqid";

import { useState, useEffect } from "react";

import UserService from "../services/user.service";
import PostListItem from "./PostListItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    UserService.getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="PostList">
      {posts.map((post) => {
        if (post.published) {
          return (
            <div key={uniqid()}>
              <PostListItem post={post} />
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default PostList;
