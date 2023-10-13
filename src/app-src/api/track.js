import axios from 'axios'
import { API_URL } from '../../config'

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

export { getAllTracks, getTrackById, getTrackSelection, getTrackSelectionById }
