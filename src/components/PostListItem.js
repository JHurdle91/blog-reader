const PostListItem = (props) => {
  const { title, timestamp, body, nComments, id } = props;

  const handleClick = () => {
    window.location.href = `/posts/${id}`;
  };

  return (
    <div className="PostListItem" onClick={handleClick}>
      <h2>{title}</h2>
      <div>{timestamp}</div>
      <p>{body}</p>
      <div>{nComments}</div>
    </div>
  );
};

export default PostListItem;
