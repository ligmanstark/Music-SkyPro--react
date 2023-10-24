import { Routes, Route } from 'react-router-dom'
import { LoginContent } from './pages/LoginContent'
import { RegisterContent } from './pages/RegisterContent'
import { Content } from './pages/Content'
import { Layout } from './pages/PageLayout'
import { NotFound } from './pages/NotFound'
import { Category } from './pages/Category'
import { MyPlaylist } from './pages/MyPlaylist'
import { ProtectedRoute } from './app-src/components/ProtectedRoute'
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginContent />} />
        <Route path="/register" element={<RegisterContent />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />} />
          <Route path="/favorites" element={<Layout />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export { AppRoutes }
