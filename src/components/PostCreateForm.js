import { useState } from "react";

import UserService from "../services/user.service";

const PostCreateForm = (props) => {
  const user = props.currentUser;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChangeText = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const handleBodyChangeText = (e) => {
    const body = e.target.value;
    setBody(body);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

    window.location.href = `/posts/`;
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    const published = false;
    createPostAndRedirect(published);
  };

  const handleSaveAndPublishClick = (e) => {
    e.preventDefault();
    const published = true;
    createPostAndRedirect(published);
  };

  const createPostAndRedirect = (published) => {
    if (title && body) {
      UserService.createPost(user._id, title, body, published).then(
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
    <div className="PostCreateForm">
      <form>
        <div className="form-group">
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            name="titleInput"
            onChange={handleTitleChangeText}
            className="form-control"
            placeholder="Title"
            value={title}
            required
          />
          <label htmlFor="bodyInput">Post Body:</label>
          <textarea
            id="commentBox"
            name="commentBox"
            onChange={handleBodyChangeText}
            className="form-control"
            type="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            value={body}
            required
          ></textarea>
        </div>
        <br />
        <div>
          <button className="btn btn-danger" onClick={handleCancelClick}>
            Cancel
          </button>
          <br />
          <button className="btn btn-primary" onClick={handleSaveClick}>
            Save Post
          </button>
          <br />
          <button
            className="btn btn-primary"
            onClick={handleSaveAndPublishClick}
          >
            Save and Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
