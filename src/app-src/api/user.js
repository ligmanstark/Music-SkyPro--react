import axios from 'axios'

const postRegistration = async (email, password, username) => {
  const response = await axios.post(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      email: email,
      password: password,
      username: username,
    }
  )
  return response
}

const postLogin = async (email, password) => {
  const response = await axios.post(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      email: email,
      password: password,
    }
  )
  return response
}

export { postLogin, postRegistration }
