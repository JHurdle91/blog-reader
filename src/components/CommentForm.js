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
      props.reloadComments();
      setText("");
    });
  };

  const handleKeyPress = (e) => {
    // trigger by pressing "enter"
    if (e.which === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="commentBox">Leave a comment:</label>
          <br />
          <textarea
            id="commentBox"
            name="commentBox"
            onChange={onChangeText}
            className="form-control"
            type="textarea"
            placeholder="What an excellent post!"
            value={text}
            onKeyPress={handleKeyPress}
            required
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CommentForm;
