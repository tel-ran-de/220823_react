import { useState } from 'react'
import styles from './comment.module.css'

const Comment = ({ author, body, likes }) => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div class={styles.container}>
      <div className={isHidden ? styles.hide : styles.commentContainer}>
        <h1>{author}</h1>
        <p>{body}</p>
        <p>{likes}</p>
      </div>
      <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
    </div>
  )
}

export default Comment
