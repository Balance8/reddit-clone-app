postRows = props.posts.map((post, idx) => (
  <tr key={idx}>
    <td>
      <span className="badge">{idx + 1}</span>
    </td>
    <td>{post.votes}</td>
    <td>{post.title}</td>
    <td>{post.thumbnail_image_url}</td>
  </tr>
));

return (
  <div className="HighScores">
    <header className="header-footer">Home Page</header>
    {props.posts.length ? (
      <table className="table HighScores-table text-info">
        <thead>
          <tr>
            <th width={80}>#</th>
            <th width={100}>Votes</th>
            <th width={100}>Title</th>
            <th width={100}>Img</th>
            <th width={100}>See This Post</th>
          </tr>
        </thead>
        <tbody>{postRows}</tbody>
      </table>
    ) : (
      <h4 className="text-info">No Posts Yet</h4>
    )}
    <div>
      <Link
        className="HighScores-cancel btn btn-default btn-sm"
        to="/posts/0"
        style={{ marginTop: 40 }}
      >
        See This Post
      </Link>
    </div>
  </div>
);
