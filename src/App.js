import { Button } from './components/Button/Button'
import Default from './components/DefaultExportButton/DefaultExportButton'
import { Post } from './components/Post/Post'
import TodoList from './components/TodoList/TodoList'
import User, { User1, User2 } from './components/User/User'

function App() {
  const user = {
    userName: 'Jack',
    age: 29,
  }
  return (
    <h1 className="App">
      {/* User({userName: "Michel"}) */}
      <User userName="Peter" />
      <User1 userName="Clark" />
      {/* <User2 userName={user.userName} age={user.age} /> */}
      <User2 {...user} />
      <Default />
      <Button />
      <TodoList />
      <Post />
    </h1>
  )
}

export default App
