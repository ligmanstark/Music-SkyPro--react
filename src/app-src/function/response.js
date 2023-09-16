import axios from 'axios'
import { API_URL } from '../config'

const getAllTracks = async () => {
  const response = await axios.get(API_URL + 'catalog/track/all/')
  return response
}

const getTrackById = async (Id) => {
  const response = await axios.get(API_URL + 'catalog/track/' + Id)
  return response
}

const getTrackSelection = async () => {
  const response = await axios.get(API_URL + 'catalog/selection/')
  return response
}

const getTrackSelectionById = async (Id) => {
  const response = await axios.get(API_URL + 'catalog/selection/' + Id)
  return response
}

const postRegistration = async (email, password, username) => {
  const response = await axios.post('https://skypro-music-api.skyeng.tech/user/signup/', {
    email: email,
    password: password,
    username: username,
  })
  return response
}

const postLogin = async (email, password) => {
  const response = await axios.post('https://skypro-music-api.skyeng.tech/user/login/', {
    email: email,
    password: password,
  })
  return response
}

export {
  getAllTracks,
  getTrackById,
  getTrackSelection,
  getTrackSelectionById,
  postRegistration,
  postLogin,
}
