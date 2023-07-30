import './App.css'
import Navigation from './app-src/Navigation'
import MiddleContent from './app-src/MiddleContent'
import Sidebar from './app-src/Sidebar'
import PlayerBar from './app-src/PlayBar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
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
