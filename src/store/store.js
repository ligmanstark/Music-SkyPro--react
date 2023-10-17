import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import tokenReducer from './slice/tokenSlice'
import musicReducer from './slice/musicSlice'
import { serviceMusicApi } from './service/serviceMusicApi'

export default configureStore({
  reducer: {
    [serviceMusicApi.reducerPath]: serviceMusicApi.reducer,
    musicReducer: musicReducer,
    token: tokenReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceMusicApi.middleware),
})
