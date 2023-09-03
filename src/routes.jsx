import { Routes, Route } from 'react-router-dom'
import { LoginContent } from './pages/LoginContent'
import { RegisterContent } from './pages/RegisterContent'
import { Content } from './pages/Content'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { MyPlaylist } from './pages/MyPlaylist'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginContent />}>
        <Route path="/login" element={<LoginContent />} />
      </Route>
      <Route path="/register" element={<RegisterContent />} />
      <Route path="/sky-music" element={<Content />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/my-playlist" element={<MyPlaylist />} />
    </Routes>
  )
}

export { AppRoutes }
