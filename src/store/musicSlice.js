import { createSlice } from '@reduxjs/toolkit'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { searchID } from '../app-src/helpers/searchID'
import { getTrackById } from '../app-src/api/track'


const musicSlice = createSlice({
  name: 'music',
  initialState: {
    selectNextSong: [],
    selectSong: [],
    music: [],
    shuffleSongPlaylist: [],
  },
  reducers: {
    setterSong(state, action) {
      console.log(state)
      console.log(action)
      searchFunc(
        getTrackById,
        searchID(
          action.payload.setmusic.music,
          action.payload.setmusic.valueName
        ).id + '/'
      )

    },
    shuffle(state, action) {
      console.log(state)
      console.log(action)
      let currentIndex = action.payload.length
      let arr = action.payload
      let randomIndex
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[arr[currentIndex], arr[randomIndex]] = [
          arr[randomIndex],
          arr[currentIndex],
        ]
      }
      state.shuffleSongPlaylist.push(...arr)
      console.log(state.shuffleSongPlaylist)
    },
    nextSong(state, action) {
      console.log(state)
      console.log(action)
      let currentIndex = action.payload.selectSong[0].id
      let nextSong = action.payload.music.find(
        (findSong) => findSong.id === currentIndex + 1
      )
      state.selectNextSong.push(nextSong)
    },
    prevSong(state, action) {},
  },
})

export const { shuffle, nextSong, setterSong } = musicSlice.actions

export default musicSlice.reducer
