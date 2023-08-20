import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Certs from './components/Certs'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <SideNav />
      <Main/>
      <Projects/>
      <Certs/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App
