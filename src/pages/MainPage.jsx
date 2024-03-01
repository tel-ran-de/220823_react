import Clients from '../components/Clients/Clients'
import Content from '../components/Content/Content'
import Services from '../components/Services/Services'
import Header from '../layout/Header/Header'

const MainPage = () => {
  return (
    <main>
      <Header />
      <Content />
      <Services />
      <Clients />
    </main>
  )
}

export default MainPage
