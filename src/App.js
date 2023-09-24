import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
const App = () => {
  const [token, setToken] = useState(true)
  const [user, setUser] = useState('')
  return (
    <Router basename="/Music-SkyPro--react">
      <main>
        <AppRoutes
          token={token}
          setToken={setToken}
          user={user}
          setUser={setUser}
        />
      </main>
    </Router>
  )
}

export { App }
