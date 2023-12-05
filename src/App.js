import { useContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppContext } from './context'
const App = () => {
  const token = useContext(AppContext).token
  const user = useContext(AppContext).user
  return (
    <Router basename="/Music-SkyPro--react">
      <AppContext.Provider
        value={{
          user: user,
          token: token,
        }}
      >
        <AppRoutes />
      </AppContext.Provider>
    </Router>
  )
}

//levis5@levis.levis
//levis5@levis.levis

export { App }
