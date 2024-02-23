import { Post } from './components/Post/Post'
import TodoList from './components/TodoList/TodoList'
import { Button } from './components/Button/Button'
import Default from './components/DefaultExportButton/DefaultExportButton'
import { User } from './components/User/User'

function App() {
  return (
    <h1 className="App">
      {/* User({userName: "Michel"}) */}
      <User userName="Michel" />
      <Default />
      <Button />
      <TodoList />
      <Post />
    </h1>
  )
}

export default App
