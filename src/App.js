import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
function App() {
  const [token, setToken] = useState(true)
  return (
    <Router basename="/Music-SkyPro--react">
      <main>
        <AppRoutes token={token} setToken={setToken} />
      </main>
    </Router>
  )
}

export default App
