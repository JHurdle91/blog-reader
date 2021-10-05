const CommentForm = () => {
  return (
    <div className="CommentForm">
      <form method="POST" action="">
        <div class="form-group">
          <label for="commentBox">Leave a comment:</label>
          <br />
          <textarea
            id="commentBox"
            name="commentBox"
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
