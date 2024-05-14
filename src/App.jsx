import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Kitchenproduct from './components/Kitchenproduct/Kitchenproduct'
import Healthproduct from './components/HealthProduct/Healthproduct'
import Personalproduct from './components/Personalproduct/Personalproduct'
import Footer from './components/Footer/Footer'
// import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Healthproduct />
      <Kitchenproduct />
      <Personalproduct />
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App
