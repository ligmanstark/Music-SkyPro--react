import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login', token }) => {
  console.log(token)
  if (localStorage.getItem('user') === '') {
    return <Navigate to={redirectPath} replace={true} />
  }

  return <Outlet />
}
