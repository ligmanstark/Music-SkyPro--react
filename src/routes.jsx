import { Routes, Route } from 'react-router-dom'
import { LoginContent } from './pages/LoginContent'
import { RegisterContent } from './pages/RegisterContent'
import { Layout } from './pages/PageLayout'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './app-src/components/ProtectedRoute'
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginContent />} />
        <Route path="/register" element={<RegisterContent />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/category/:id" element={<Layout />} />
          <Route path="/favorites" element={<Layout />} />
          <Route path="/" element={<Layout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export { AppRoutes }
