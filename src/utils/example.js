function first() {
  console.log('first')
}

function second() {
  console.log('second')
}

function third() {
  console.log('third')
  second()
  first()
}
function AddTodo() {
  console.log('ADD')
  third()
}
function TodoList(done, task) {
  let message = done ? 'DONE' : task
  console.log(message)
}

function TodoList1(task, done) {
  let message = done ? 'DONE' : task
  console.log(message)
}

const firstTask = { task: 'Learn props', done: true }

function App({ task, done }) {
  console.log(task)
  TodoList(false, 'Learn react') //  <TodoList done={false} task="Learn React" />
  TodoList1(task, done) // <TodoList done={done} task={task}/>
}

App(firstTask)
