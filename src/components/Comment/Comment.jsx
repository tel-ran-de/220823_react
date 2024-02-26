import { useState } from 'react'

const Comment = ({ author, body, likes }) => {
  const [marked, setMarked] = useState(true)
  const [bgMarked, setbgMarked] = useState(false)
  // bgMarked
  // импортировать фук useState
  // деструктурировать его marked setMarked
  // initState false
  // в зависимости от marked
  // style - color: marked ?  orange  : green
  // создать кнопку которая меняет состояние на противоположное

  // создать новую и новое состояние и менять значение заднего фона
  // красным либо фиолетовым
  return (
    <div
      style={{ color: marked ? 'orange' : 'green', backgroundColor: bgMarked ? 'red' : 'violet' }}
    >
      <h1>{author}</h1>
      <p>{body}</p>
      <p>{likes}</p>
      <button onClick={() => setMarked(!marked)}>change color</button>
      <button onClick={() => setbgMarked(!bgMarked)}>change background</button>
    </div>
  )
}

export default Comment
