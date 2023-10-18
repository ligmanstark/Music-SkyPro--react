import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../config'
export const serviceMusicApi = createApi({
  reducerPath: 'serviceMusicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    tagTypes: ['Tracks', 'Favorites'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.accessToken

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
    getTrackById: builder.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/`,
        method: 'GET',
      }),
      invalidatesTags: [{ type: 'Track', id: 'LIST' }],
    }),
    getSectionTracks: builder.query({
      query: (id = '') => `catalog/selection/${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: 'Selections', id })),
              { type: 'Selections', id: 'LIST' },
            ]
          : [{ type: 'Selections', id: 'LIST' }],
    }),
    setSectionTracks: builder.mutation({
      query: (track) => ({
        url: `catalog/selection/${track.id}`,
        method: 'GET',
      }),
      invalidatesTags: [{ type: 'Selections', id: 'LIST' }],
    }),
    getFavTracks: builder.query({
      query: () => 'catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Favorites', id })),
              { type: 'Favorites', id: 'LIST' },
            ]
          : [{ type: 'Favorites', id: 'LIST' }],
    }),

    setLike: builder.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    setUnlike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    postReg: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

    postLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

    postToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
      }),
    }),

    postTokenRefresh: builder.mutation({
      query: (body) => ({
        url: 'user/token/refresh/',
        method: 'POST',
        body,
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
      }),
    }),
  }),
})

export const {
  useGetSectionTracksQuery,
  useSetSectionTracksMutation,
  useLazyGetSectionTracksQuery,
  useGetTrackByIdMutation,
  useGetAllTracksQuery,
  useGetFavTracksQuery,
  useLazyGetAllTracksQuery,
  useLazyGetFavTracksQuery,

  useSetLikeMutation,
  useSetUnlikeMutation,

  usePostRegMutation,
  usePostLoginMutation,

  usePostTokenMutation,
  usePostTokenRefreshMutation,
} = serviceMusicApi
