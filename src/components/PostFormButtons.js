import React from "react";

const PostFormButtons = (props) => {
  const handleClickCancel = (e) => {
    e.preventDefault();
    props.onClickCancel();
  };

  const handleClickSave = (e) => {
    e.preventDefault();
    props.onClickSave();
  };

  const handleClickSaveAndPublish = (e) => {
    e.preventDefault();
    props.onClickSaveAndPublish();
  };

  return (
    <div className="PostFormButtons">
      <button className="btn btn-danger" onClick={handleClickCancel}>
        Cancel
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleClickSave}>
        Save Post (Unpublished)
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleClickSaveAndPublish}>
        Save and Publish Post
      </button>
    </div>
  );
};

export default PostFormButtons;
