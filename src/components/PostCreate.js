import React, { useState, useEffect } from "react";

import PostForm from "./PostForm";
import PostFormButtons from "./PostFormButtons";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const PostCreate = () => {
  const [admin, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setAdmin(roles.includes("ROLE_ADMIN"));
      setCurrentUser(user);
    }
  }, []);

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  const handleChangeBody = (value) => {
    setBody(value);
  };

  const handleClickCancel = (e) => {
    window.location.href = `/posts/`;
  };

  const handleClickSave = () => {
    const published = false;
    createPostAndRedirect(published);
  };

  const handleClickSaveAndPublish = () => {
    const published = true;
    createPostAndRedirect(published);
  };

  const createPostAndRedirect = (published) => {
    if (title && body) {
      UserService.createPost(currentUser._id, title, body, published).then(
        (response) => {
          const postId = response.data._id;
          window.location.href = `/posts/${postId}`;
        }
      );
    } else {
      alert("Title and Body are required.");
    }
  };

  return (
    <div className="PostCreate">
      <h1>New Post</h1>
      <hr />
      {admin ? (
        <div>
          <PostForm
            onChangeTitle={handleChangeTitle}
            onChangeBody={handleChangeBody}
          />
          <br />
          <PostFormButtons
            onClickCancel={handleClickCancel}
            onClickSave={handleClickSave}
            onClickSaveAndPublish={handleClickSaveAndPublish}
          />
        </div>
      ) : (
        <div>Only the Admin can create new posts at this time...</div>
      )}
    </div>
  );
};

export default PostCreate;
