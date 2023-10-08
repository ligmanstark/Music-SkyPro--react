import { createContext } from 'react'

const setUserLocalStorage = () => {
  const userLocalStorage = localStorage.getItem('user')
  return userLocalStorage ? userLocalStorage : ''
}

const setTokenLocalStorage = () => {
  const tokenLocalStorage = localStorage.getItem('token')
  return tokenLocalStorage ? tokenLocalStorage : false
}

const initialState = {
  user: setUserLocalStorage,
  token: setTokenLocalStorage,
}
console.log(initialState)
const AppContext = createContext(initialState)

export { AppContext }
