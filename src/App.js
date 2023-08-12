import './App.css'
import { Content } from './app-src/Content'
import { LoginContent } from './app-src/LoginContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LoginContent />}>
            <Route path="/login" element={<LoginContent />} />
          </Route>
          <Route path="/sky-music" element={<Content />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
