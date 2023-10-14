import { createSlice } from '@reduxjs/toolkit'
import { audioRef } from '../app-src/layout/layout-content/PlayBar'
const musicSlice = createSlice({
  name: 'music',
  initialState: {
    selectNextSong: [],
    selectPrevSong: [],
    selectSong: [],
    music: [],
    shuffleSongPlaylist: [],
    shuffleActive: false,
    currentTime: [],
    duration: [],
  },
  reducers: {
    autoNext(state, action) {
      console.log(action)
      state.duration = action.payload.duration
      state.currentTime = action.payload.currentTime
      if (state.duration !== NaN && state.duration == state.currentTime) {
      }
    },
    changeShuffle(state, action) {
      console.log(action)
      state.shuffleActive = action.payload
    },
    setterSong(state, action) {
      state.selectSong.pop()
      state.selectSong.push(action.payload)
    },
    setterMusic(state, action) {
      state.music.pop()
      state.music.push(action.payload)
    },
    shuffle(state, action) {
      let currentIndex = action.payload[0].length
      const arr = action.payload[0]
      const arrCopy = [...arr]
      let randomIndex
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[arrCopy[currentIndex], arrCopy[randomIndex]] = [
          arrCopy[randomIndex],
          arrCopy[currentIndex],
        ]
      }
      state.shuffleSongPlaylist.pop()
      state.shuffleSongPlaylist.push(arrCopy)
    },
    nextSong(state, action) {
      let nextSong
      let currentIndex

      if (state.shuffleActive) {
        currentIndex = action.payload.selectSong[0][0].id
        nextSong = state.shuffleSongPlaylist[0].find(
          (findSong) =>
            findSong.id === Math.floor(Math.random() * (36 - 8 + 1) + 1)
        )
        if (nextSong === undefined) {
          nextSong = state.shuffleSongPlaylist[0].find(
            (findSong) =>
              findSong.id === Math.floor(Math.random() * (36 - 8 + 1) + 1)
          )
        } else {
          if (currentIndex < 36) {
            state.selectNextSong.pop()
            state.selectNextSong.push(nextSong)
            state.selectSong.pop()
            state.selectSong.push([nextSong])
          }
        }
      } else {
        currentIndex = action.payload.selectSong[0][0].id

        nextSong = action.payload.music[0].find(
          (findSong) => findSong.id === currentIndex + 1
        )
        if (currentIndex < 36) {
          state.selectNextSong.pop()
          state.selectNextSong.push(nextSong)
          state.selectSong.pop()
          state.selectSong.push([nextSong])
        }
      }
    },
    prevSong(state, action) {
      let prevSong
      let currentIndex

      if (state.shuffleSongPlaylist.length) {
        currentIndex = action.payload.selectSong[0][0].id
        prevSong = state.shuffleSongPlaylist[0].find(
          (findSong) =>
            findSong.id === Math.floor(Math.random() * (36 - 8 + 1) + 1)
        )
        if (prevSong === undefined) {
          prevSong = state.shuffleSongPlaylist[0].find(
            (findSong) =>
              findSong.id === Math.floor(Math.random() * (36 - 8 + 1) + 1)
          )
        } else {
          if (currentIndex > 8) {
            state.selectPrevSong.pop()
            state.selectPrevSong.push(prevSong)
            state.selectSong.pop()
            state.selectSong.push([prevSong])
          }
        }
      } else {
        currentIndex = action.payload.selectSong[0][0].id
        prevSong = action.payload.music[0].find(
          (findSong) => findSong.id === currentIndex - 1
        )
        if (currentIndex > 8) {
          state.selectPrevSong.pop()
          state.selectPrevSong.push(prevSong)
          state.selectSong.pop()
          state.selectSong.push([prevSong])
        }
      }
    },
  },
})

export const {
  shuffle,
  nextSong,
  prevSong,
  setterSong,
  setterMusic,
  changeShuffle,
  autoNext,
} = musicSlice.actions

export default musicSlice.reducer
