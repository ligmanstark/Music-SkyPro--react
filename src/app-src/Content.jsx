import Navigation from './layout/layout-content/Navigation'
import MiddleContent from './layout/layout-content/MiddleContent'
import Sidebar from './layout/layout-content/Sidebar'
import PlayerBar from './layout/layout-content/PlayBar'

function Content() {
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

export { Content }
