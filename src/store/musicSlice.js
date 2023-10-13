import { createSlice, isPlain } from '@reduxjs/toolkit'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { searchID } from '../app-src/helpers/searchID'
import { getTrackById } from '../app-src/api/track'

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    selectNextSong: [],
    selectPrevSong: [],
    selectSong: [],
    music: [],
    shuffleSongPlaylist: [],
  },
  reducers: {
    setterSong(state, action) {
      state.selectSong.pop()
      state.selectSong.push(action.payload)
    },
    shuffle(state, action) {
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
      let nextSong
      let currentIndex

      currentIndex = action.payload.selectSong[0][0].id

      nextSong = action.payload.music.find(
        (findSong) => findSong.id === currentIndex + 1
      )
      if (currentIndex < 36) {
        state.selectNextSong.pop()
        state.selectNextSong.push(nextSong)
        state.selectSong.pop()
        state.selectSong.push([nextSong])
      }
    },
    prevSong(state, action) {
      let prevSong
      let currentIndex

      currentIndex = action.payload.selectSong[0][0].id
      prevSong = action.payload.music.find(
        (findSong) => findSong.id === currentIndex - 1
      )
      if (currentIndex > 8) {
        state.selectPrevSong.pop()
        state.selectPrevSong.push(prevSong)
        state.selectSong.pop()
        state.selectSong.push([prevSong])
      }
    },
  },
})

export const { shuffle, nextSong, prevSong, setterSong, setPlay } =
  musicSlice.actions

export default musicSlice.reducer
