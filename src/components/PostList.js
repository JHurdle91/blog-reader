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
