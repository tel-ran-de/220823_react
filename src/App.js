import AboutMe from './components/AboutMe/AboutMe'
import { Counter } from './components/Counter/Counter'
import { Post } from './components/Post/Post'
import { Todo } from './components/Todo/Todo'

function App() {
  return (
    <h1 className="App">
      <Counter />
      <AboutMe />
      <Todo title="NEW TODO" description="THIS IS A DEMONSTRATION" />
      <Post title="Football match" descrition="today at 11 oclock" likes={1} />
    </h1>
  )
}

export default App
