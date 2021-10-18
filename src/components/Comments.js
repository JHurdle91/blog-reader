import uniqid from "uniqid";

import Comment from "./Comment";

const Comments = (props) => {
  const { comments, reloadComments } = props;

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
