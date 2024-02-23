const User = (props) => {
  return <div>{props.userName}</div>
}

export const User1 = (props) => {
  const { userName } = props
  return <div>{userName}</div>
}

export const User2 = ({ userName, age }) => {
  return (
    <div>
      <h1>{userName}</h1>
      <p>{age}</p>
    </div>
  )
}

export default User
