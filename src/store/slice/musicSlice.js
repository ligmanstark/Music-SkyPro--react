import { createSlice } from '@reduxjs/toolkit'
import { audioRef } from '../../app-src/layout/layout-content/PlayBar'
const musicSlice = createSlice({
  name: 'music',
  initialState: {
    currentPage: '',
    selectNextSong: [],
    selectPrevSong: [],
    selectSong: [],
    music: [],
    shuffleSongPlaylist: [],
    shuffleActive: false,
    currentTime: [],
    duration: [],
    five: 5,
    restart: false,
    activeSong: false,
    num: 1,
    overNum: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    prevTakeStartCount(state, action) {
      state.overNum = action.payload - 1
    },
    prevTakeCount(state, action) {
      state.num = action.payload - 1
    },
    takeStartCount(state, action) {
      state.overNum = action.payload + 1
    },
    takeCount(state, action) {
      state.num = action.payload + 1
    },
    active(state, action) {
      state.activeSong = !action.payload
    },
    autoNext(state, action) {
      state.duration = action.payload.duration
      state.currentTime = action.payload.currentTime
      if (state.duration !== NaN && state.duration === state.currentTime) {
        let nextSong
        let currentIndex

        if (state.shuffleActive) {
          currentIndex = state.selectSong[0][0].id
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
          currentIndex = state.selectSong[0][0].id

          nextSong = state.music[0].find(
            (findSong) => findSong.id === currentIndex + 1
          )
          if (currentIndex < 36) {
            state.selectNextSong.pop()
            state.selectNextSong.push(nextSong)
            state.selectSong.pop()
            state.selectSong.push([nextSong])
          }
        }
      }
    },
    changeShuffle(state, action) {
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
      audioRef.current.pause()
      audioRef.current.play()

      state.activeSong = !state.activeSong
      let nextSong
      let currentIndex
      if (state.shuffleActive) {
        if (state.num < 29) {
          currentIndex = action.payload.selectSong[0][0].id

          nextSong = state.shuffleSongPlaylist[0].slice(
            state.overNum,
            state.num
          )

          if (nextSong === undefined) {
            nextSong = state.shuffleSongPlaylist[0].find(
              (findSong) =>
                findSong.id ===
                state.shuffleSongPlaylist[0].slice(state.overNum, state.num).id
            )
          } else {
            if (currentIndex < 36) {
              state.selectNextSong.pop()
              state.selectNextSong.push(nextSong)
              state.selectSong.pop()
              state.selectSong.push([nextSong[0]])
            }
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
      if (state.five < state.currentTime) {
        state.activeSong = true
        state.restart = !state.restart
        audioRef.current.load()
        audioRef.current.play()
      } else {
        if (state.shuffleActive) {
          if (state.num > 1) {
            currentIndex = action.payload.selectSong[0][0].id

            prevSong = state.shuffleSongPlaylist[0].slice(
              state.overNum,
              state.num
            )

            if (prevSong === undefined) {
              prevSong = state.shuffleSongPlaylist[0].find(
                (findSong) =>
                  findSong.id ===
                  state.shuffleSongPlaylist[0].slice(state.overNum, state.num)
                    .id
              )
            } else {
              if (currentIndex > 8 && currentIndex !== undefined) {
                state.selectPrevSong.pop()
                state.selectPrevSong.push(prevSong)
                state.selectSong.pop()
                state.selectSong.push([prevSong[0]])
              }
            }
          }
        } else {
          currentIndex = action.payload.selectSong[0][0].id

          prevSong = action.payload.music[0].find(
            (findSong) => findSong.id === currentIndex - 1
          )
          if (currentIndex > 8 && prevSong !== undefined) {
            state.selectPrevSong.pop()
            state.selectPrevSong.push(prevSong)
            state.selectSong.pop()
            state.selectSong.push([prevSong])
          }
          audioRef.current.load()
          audioRef.current.play()
        }
      }
    },
  },
})

export const {
  prevTakeStartCount,
  prevTakeCount,
  takeStartCount,
  takeCount,
  shuffle,
  nextSong,
  prevSong,
  setterSong,
  setterMusic,
  changeShuffle,
  autoNext,
  active,
  setCurrentPage,
} = musicSlice.actions

export default musicSlice.reducer
