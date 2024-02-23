import { useState } from 'react'

const AddNewComment = () => {
  const [body, setBody] = useState('')
  return (
    <form>
      <label htmlFor="body">
        Your comment
        <input type="text" id="body" onChange={(event) => setBody(event.target.value)} />
      </label>
      {body}
    </form>
  )
}

export default AddNewComment
