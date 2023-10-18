import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.token
      state.refreshToken = action.payload.refreshToken
    },
  },
})

export const { setAccessToken } = tokenSlice.actions

export default tokenSlice.reducer
