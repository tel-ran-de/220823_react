import { useState } from 'react'
import { comments } from '../../utils/comments'
import AddNewComment from '../AddNewComment/AddNewComment'
import Comment from '../Comment/Comment'
import styles from './commentList.module.css'

const CommentsList = () => {
  const [commentList, setCommentList] = useState(comments)
  return (
    <div>
      <AddNewComment />
      <div className={styles.commentListContainer}>
        {commentList.map((comment) => (
          <Comment key={comment.id} {...comment} />
          //<Comment key={comment.id} author={comment.author} body={comment.body} likes={comment.likes}/>
        ))}
      </div>
    </div>
  )
}

export default CommentsList
