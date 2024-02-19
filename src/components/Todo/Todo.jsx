// props это объект
export const Todo1 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export const Todo2 = (props) => {
  const { title } = props
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const Todo = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
