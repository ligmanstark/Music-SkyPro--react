import logo from './logo.png'
import './App.css'
import Navigation from './app-src/Navigation'
import MiddleContent from './app-src/MiddleContent'
import Sidebar from './app-src/Sidebar'
import PlayerBar from './app-src/PlayBar'
import { useState } from 'react'

function App() {
  const [active, setActiveMenu] = useState(false)
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo"></img>
            </div>
            <div
              className=""
              onClick={() => {
                setActiveMenu(!active)
              }}
            >
              <Navigation active={active} setActiveMenu={setActiveMenu} />
            </div>
          </nav>
          <MiddleContent />
          <Sidebar />
        </main>
        <PlayerBar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
