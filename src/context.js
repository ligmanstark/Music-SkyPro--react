import { createContext } from 'react'

const setUserLocalStorage = () => {
  const userLocalStorage = localStorage.getItem('user')
  return userLocalStorage ? userLocalStorage : ''
}

const setTokenLocalStorage = () => {
  const tokenLocalStorage = localStorage.getItem('token')
  return tokenLocalStorage ? tokenLocalStorage : ''
}

const setIsPlayingLocalStorage = () => {
  const isPlayingLocalStorage = Boolean(localStorage.getItem('IsPlaying'))
  return isPlayingLocalStorage ? isPlayingLocalStorage : false
}

const initialState = {
  user: setUserLocalStorage,
  token: setTokenLocalStorage,
  isPlay: setIsPlayingLocalStorage,
}
const AppContext = createContext(initialState)

export { AppContext }
