import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import PostForm from "./PostForm";
import PostFormButtons from "./PostFormButtons";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const PostUpdate = () => {
  const { postId } = useParams();
  const history = useHistory();

  const [admin, setAdmin] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState({
    title: "",
    timestamp: "",
    timestamp_formatted: "",
    text: "",
    published: false,
    user: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    UserService.getPost(postId).then((response) => {
      setPost(response.data);
    });
  }, [postId]);

  useEffect(() => {
    setTitle(post.title);
    setBody(post.text);
  }, [post]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const roles = [];
      user.roles.map((role) => roles.push(role.name));
      setAdmin(roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const handleChangeTitle = (value) => {
    setTitle(value);
  };

  const handleChangeBody = (value) => {
    setBody(value);
  };

  const handleClickCancel = () => {
    history.push(`/posts/${postId}`);
  };

  const handleClickSave = () => {
    const published = false;
    updatePostAndRedirect(published);
  };

  const handleClickSaveAndPublish = () => {
    const published = true;
    updatePostAndRedirect(published);
  };

  const updatePostAndRedirect = (published) => {
    if (title && body) {
      UserService.updatePost(postId, title, body, published).then(() => {
        history.push(`/posts/${postId}`);
      });
    } else {
      alert("Title and Body are required.");
    }
  };

  return (
    <div className="PostUpdate">
      <h1>Update Post</h1>
      <hr />
      {admin ? (
        <div>
          <PostForm
            title={title}
            body={body}
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
        <div>Only the Admin can update posts at this time...</div>
      )}
    </div>
  );
};

export default PostUpdate;
