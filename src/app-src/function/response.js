import axios from 'axios'
import { API_URL } from '../config'

const getAllTracks = async () => {
  const response = await axios.get(API_URL + 'catalog/track/all/')
  return response
}
const getTrackByName = async (name) => {
  const response = await axios.get(API_URL + 'catalog/track/' + name)
  return response
}

const getTrackById = async (Id) => {
  const response = await axios.get(API_URL + 'catalog/track/' + Id)
  return await response
}

const getTrackSelection = async () => {
  const response = await axios.get(API_URL + 'catalog/selection/')
  return await response
}

const getTrackSelectionById = async (Id) => {
  const response = await axios.get(API_URL + 'catalog/selection/' + Id)
  return await response
}

export {
  getAllTracks,
  getTrackById,
  getTrackSelection,
  getTrackSelectionById,
  getTrackByName,
}
