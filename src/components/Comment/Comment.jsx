const Comment = ({ author, body, likes }) => {
  return (
    <div>
      <h1>{author}</h1>
      <p>{body}</p>
      <p>{likes}</p>
    </div>
  )
}

export default Comment
