const Comment = (props) => {
  const { timestamp, text, user } = props;
  return (
    <div className="Comment">
      <div>
        <strong>{user}</strong>
      </div>
      <div>{timestamp}</div>
      <br />
      <div>{text}</div>
    </div>
  );
};

export default Comment;
