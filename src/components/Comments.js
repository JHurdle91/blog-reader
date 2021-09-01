import uniqid from "uniqid";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getComments } from "../data/source/blogApi";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    const pullComments = async () => {
      setComments(await getComments(postId));
    };
    pullComments();
  }, [postId]);

  return (
    <div className="Comments">
      {comments.map((comment) => {
        const { timestamp, text, user, _id } = comment;
        return (
          <div key={uniqid()}>
            <Comment
              id={_id}
              timestamp={timestamp}
              text={text}
              user={user.username}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
