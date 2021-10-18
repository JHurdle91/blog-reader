import uniqid from "uniqid";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import Comment from "./Comment";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  const reloadComments = () => {
    UserService.getComments(postId).then((response) => {
      setComments(response.data);
    });
  };

  useEffect(() => {
    reloadComments();
  }, []);

  return (
    <div className="Comments">
      {comments.map((comment) => {
        const { timestamp_formatted, text, user, _id } = comment;
        const { currentUser, admin } = props;
        return (
          <div key={uniqid()}>
            <Comment
              id={_id}
              timestamp={timestamp_formatted}
              text={text}
              commentAuthor={user}
              currentUser={currentUser}
              admin={admin}
              reloadComments={reloadComments}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
