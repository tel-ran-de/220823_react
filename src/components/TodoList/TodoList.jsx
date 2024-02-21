import { useState } from 'react'
import { todos } from '../../utils/todos'
//Импортировать в компонент массив todo
const TodoList = () => {
  const [todoList, setTodoList] = useState(todos)
  console.log(todoList)
  return <div></div>
}

export default TodoList
