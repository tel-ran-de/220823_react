//title, description likes
export const Post = ({ title, descrition, likes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{descrition}</p>
      <p>{likes}</p>
    </div>
  )
}
