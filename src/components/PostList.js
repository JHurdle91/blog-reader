import uniqid from "uniqid";

import { useState, useEffect } from "react";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import PostListItem from "./PostListItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    UserService.getPosts().then((response) => {
      setPosts(response.data);
    });

    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setAdmin(roles.includes("ROLE_ADMIN"));
    }
  }, []);

  return (
    <div className="PostList">
      {posts.map((post) => {
        if (post.published || admin) {
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
