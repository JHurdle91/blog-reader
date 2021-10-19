import { useState, useEffect } from "react";

import PostCreateForm from "./PostCreateForm";
import AuthService from "../services/auth.service";

const PostCreate = () => {
  const [admin, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setAdmin(roles.includes("ROLE_ADMIN"));
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className="PostCreate">
      <h1>New Post</h1>
      <hr />
      {admin ? (
        <div>
          <PostCreateForm currentUser={currentUser} />
        </div>
      ) : (
        <div>Only the Admin can create new posts at this time...</div>
      )}
    </div>
  );
};

export default PostCreate;
