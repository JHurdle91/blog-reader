const PostListItem = (props) => {
  const { title, timestamp_formatted, text, _id } = props.post;
  const nComments = 5;

  const handleClick = () => {
    window.location.href = `/posts/${_id}`;
  };

  return (
    <div className="PostListItem" onClick={handleClick}>
      <h2>{title}</h2>
      <div>{timestamp_formatted}</div>
      <p>{text}</p>
      <div>{nComments}</div>
    </div>
  );
};

export default PostListItem;
