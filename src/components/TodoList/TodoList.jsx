import { useState } from 'react'
import { todos } from '../../utils/todos'
import { Todo } from '../Todo/Todo'
//Импортировать в компонент массив todo
const TodoList = () => {
  const [todoList, setTodoList] = useState(todos)

  return (
    <div>
      {todoList ? (
        todoList?.map((todo) => <Todo key={todo.id} {...todo} />)
      ) : (
        <h1>Данные грузятся</h1>
      )}
    </div>
  )
}

export default TodoList
