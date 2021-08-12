const PostDetail = (props) => {
  const { title, timestamp, body, nComments } = props;
  return (
    <div className="PostDetail">
      <h2>{title}</h2>
      <div>{timestamp}</div>
      <p>{body}</p>
      <div>{nComments}</div>
    </div>
  );
};

export default PostDetail;
