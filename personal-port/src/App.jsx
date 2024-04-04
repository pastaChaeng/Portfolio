import NavBar from './components/NavBar'
import Main from './components/Main'
import Certs from './components/Certs'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Main/>
      <Projects/>
      <Certs/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
