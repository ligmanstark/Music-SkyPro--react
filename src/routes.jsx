import { Routes, Route } from 'react-router-dom'
import { LoginContent } from './pages/LoginContent'
import { RegisterContent } from './pages/RegisterContent'
import { Content } from './pages/Content'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { MyPlaylist } from './pages/MyPlaylist'
import { ProtectedRoute } from './app-src/components/ProtectedRoute'
const AppRoutes = (props) => {
  const { token, setToken, user, setUser } = props
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginContent setToken={setToken} setUser={setUser} />}
        />
        <Route path="/register" element={<RegisterContent />} />
        <Route element={<ProtectedRoute token={Boolean(token)} />}>
          <Route path="/" element={<Content user={user} />} />
          <Route path="/category/:id" element={<Category user={user} />} />
          <Route path="/favorites" element={<MyPlaylist user={user} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export { AppRoutes }
