import './App.css'
import { Content } from './app-src/Content'
import { LoginContent } from './app-src/LoginContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RegisterContent } from './app-src/RegisterContent'

function App() {
  return (
    <Router basename="/Music-SkyPro--react">
      <main>
        <Routes>
          <Route path="/" element={<LoginContent />}>
            <Route path="/login" element={<LoginContent />} />
          </Route>
          <Route path="/register" element={<RegisterContent />} />
          <Route path="/sky-music" element={<Content />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
