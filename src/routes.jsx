import { Routes, Route } from 'react-router-dom'
import { LoginContent } from './pages/LoginContent'
import { RegisterContent } from './pages/RegisterContent'
import { Content } from './pages/Content'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { MyPlaylist } from './pages/MyPlaylist'
import { ProtectedRoute } from './app-src/components/ProtectedRoute'
const AppRoutes = (token, setToken) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginContent />}>
          <Route path="/login" element={<LoginContent setToken={setToken} />} />
        </Route>
        <Route path="/register" element={<RegisterContent />} />
        <Route element={<ProtectedRoute token={Boolean(token)} />}>
          <Route path="/sky-music" element={<Content />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/my-playlist" element={<MyPlaylist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export { AppRoutes }
