import AboutMe from './components/AboutMe'
import { Post } from './components/Post/Post'
import { Todo } from './components/Todo/Todo'

function App() {
  return (
    <h1 className="App">
      <AboutMe />
      <Todo title="NEW TODO {}" description="THIS IS A DEMONSTRATIon" />
      <Post />
    </h1>
  )
}

export default App
