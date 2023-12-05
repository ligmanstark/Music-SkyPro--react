import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
  if (localStorage.length < 1 && localStorage.getItem('user') === '') {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
