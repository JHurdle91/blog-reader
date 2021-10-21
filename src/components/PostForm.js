import React from "react";

const PostCreateForm = (props) => {
  const handleChangeTitle = (e) => {
    e.preventDefault();
    props.onChangeTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    e.preventDefault();
    props.onChangeBody(e.target.value);
  };

  return (
    <div className="PostCreateForm">
      <form>
        <div className="form-group">
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            name="titleInput"
            onChange={handleChangeTitle}
            className="form-control"
            placeholder="Title"
            value={props.title}
            required
          />
          <label htmlFor="bodyInput">Post Body:</label>
          <textarea
            id="commentBox"
            name="commentBox"
            onChange={handleChangeBody}
            className="form-control"
            type="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            value={props.body}
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
