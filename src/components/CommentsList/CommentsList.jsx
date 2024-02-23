import { useState } from 'react'
import { comments } from '../../utils/comments'
import AddNewComment from '../AddNewComment/AddNewComment'
import Comment from '../Comment/Comment'

const CommentsList = () => {
  const [commentList, setCommentList] = useState(comments)
  return (
    <div>
      <AddNewComment />
      {commentList.map((comment) => (
        <Comment key={comment.id} {...comment} />
        //<Comment key={comment.id} author={comment.author} body={comment.body} likes={comment.likes}/>
      ))}
    </div>
  )
}

export default CommentsList
