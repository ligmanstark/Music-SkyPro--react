import { createContext } from 'react'

const setUserLocalStorage = () => {
  const userLocalStorage = localStorage.getItem('user')
  return userLocalStorage ? userLocalStorage : ''
}

const setTokenLocalStorage = () => {
  const tokenLocalStorage = localStorage.getItem('token')
  return tokenLocalStorage ? tokenLocalStorage : ''
}

const initialState = {
  user: setUserLocalStorage,
  token: setTokenLocalStorage,
}
const AppContext = createContext(initialState)

export { AppContext }
