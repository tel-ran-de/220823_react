import { useState } from 'react'

const AddNewComment = () => {
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  // при сабмите формы значения body author выводятся в консоль
  // onSubmit
  const handleSubmit = (event) => {
    // форма перезагружает страницу
    event.preventDefault()
    console.log(body, author)
    // значение body и author сделать пустыми строками и
    // через функцию изменяющую состояние
    setBody('')
    setAuthor('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">
        Your comment
        <input
          type="text"
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <label htmlFor="author">
        Author
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  )
}

export default AddNewComment
