import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Certs from './components/Certs'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <SideNav />
      <Main/>
      <Projects/>
      <Certs/>
      
    </div>
  )
}

export default App
