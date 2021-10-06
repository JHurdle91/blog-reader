import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const CommentForm = (props) => {
  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);

  const { postId } = useParams();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  const onChangeText = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    UserService.postComment(postId, currentUser.id, text).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="commentBox">Leave a comment:</label>
          <br />
          <textarea
            id="commentBox"
            name="commentBox"
            onChange={onChangeText}
            class="form-control"
            type="textarea"
            placeholder="What an excellent post!"
            required="true"
          ></textarea>
        </div>
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CommentForm;
