import { Content } from './pages/Content'
import { LoginContent } from './pages/LoginContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RegisterContent } from './pages/RegisterContent'
import { AppRoutes } from './routes'
function App() {
  return (
    <Router basename="/Music-SkyPro--react">
      <main>
        <AppRoutes />
      </main>
    </Router>
  )
}

export default App
