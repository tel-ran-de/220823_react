import { Counter } from "./components/Counter/Counter"
import GoogleMap from "./components/Map"
import Header from "./layout/Header/Header"

// импортировать компонент MainPAge и отобразить
function App() {
  return (
    <div>
      <Header/>
      <GoogleMap/>
        <Counter/>
    </div>
  )
}

export default App
