import { createSlice } from '@reduxjs/toolkit'
import { audioRef } from '../../pages/PageLayout'
const musicSlice = createSlice({
  name: 'music',
  initialState: {
    filteredName: '',
    filteredByGenge: [],
    filteredByYear: [],
    filteredByName: [],
    qnuicFilterDate: '',
    filterDate: [],
    isFilter: false,
    search: [],
    isSearch: false,
    baseMusic: [],
    currentPlaylist: [],
    SelectionMusic: [],
    playlistFavorite: [{}],
    currentPage: 'Main',
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
    activeSong: true,
    num: 1,
    overNum: 0,
  },
  reducers: {
    unickedFiltredDate(state, action) {
      const findLie = state.qnuicFilterDate.find((el) => el === action.payload)
      state.qnuicFilterDate.push(...action.payload)
    },
    FilterBase(state, action) {
      console.log(action.payload[0])

      if (action.payload[1] === 'исполнителю') {
        // if (state.filterDate === 'жанру')
          if (
            state.filterDate.find((el) => el.id === action.payload[0][0].id)
          ) {
            state.filterDate.pop()
          } else {
            state.filterDate.push(...action.payload[0])
          }
      } else if (action.payload[1] === 'жанру') {
        // state.filterDate = 'жанру'

        state.filterDate = action.payload[0]
        state.filteredByGenge = action.payload[0]
        // if (
        //   state.filteredByGenge.find((el) => el.id === action.payload[0][0].id)
        // ) {
        //   state.filteredByGenge = state.filterDate
        // } else {
        //   state.filteredByGenge = state.filterDate
        // }
      } else {
        state.filteredName = 'году выпуска'

        state.filterDate = action.payload[0]
      }
      console.log(state.isFilter)
      if (!state.isFilter) {
        state.filterDate.length = 0
      }
    },
    filterToggle(state, action) {
      state.isFilter = action.payload
    },
    searchBase(state, action) {
      state.search = action.payload
    },
    searchToggle(state, action) {
      state.isSearch = action.payload
    },
    setBaseMusic(state, action) {
      state.baseMusic = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    addMyTracks(state, action) {
      if (state.currentPage === 'Favorites') {
        state.playlistFavorite = action.payload
      } else if (state.currentPage === 'Category') {
        state.SelectionMusic = action.payload
      }
    },
    addCurrentTrack(state, action) {
      if (action.payload) {
        if (state.currentPage === 'Main') {
          state.currentPlaylist = state.music
        }
        if (state.currentPage === 'Favorites') {
          state.currentPlaylist = state.playlistFavorite
        }
        if (state.currentPage === 'Category') {
          state.currentPlaylist = state.SelectionMusic
        }
      }
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
      if (action.payload) {
        state.activeSong = !state.activeSong
      }
    },
    autoNext(state, action) {
      state.duration = action.payload.duration
      state.currentTime = action.payload.currentTime
      if (
        state.duration !== NaN &&
        state.currentTime !== NaN &&
        state.duration === state.currentTime
      ) {
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

          if (
            state.currentPage === 'Main' ||
            state.currentPage === 'Category'
          ) {
            const currentTrackIdInList = action.payload.music[0].findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList) {
              nextSong = action.payload.music[0][currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              }
            }
          } else if (state.currentPage === 'Favorites') {
            const currentTrackIdInList = action.payload.FavSongs.findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList) {
              nextSong = action.payload.FavSongs[currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              }
            }
          }

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
      state.selectSong.pop(action.payload.song)
      state.selectSong.push(action.payload.song)
      state.currentPlaylist.pop(action.payload.currentPlaylist)
      state.currentPlaylist.push(action.payload.currentPlaylist)
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
        if (state.currentPage === 'Main' || state.currentPage === 'Category') {
          const currentTrackIdInList = state.shuffleSongPlaylist[0].findIndex(
            (track) => track.id == state.selectSong[0][0].id
          )
          if (currentTrackIdInList) {
            nextSong = state.shuffleSongPlaylist[0][currentTrackIdInList + 1]
            if (nextSong !== undefined) {
              state.selectNextSong.pop()
              state.selectNextSong.push(nextSong)
              state.selectSong.pop()
              state.selectSong.push([nextSong])
            } else {
              audioRef.current.pause()
            }
          }
        } else if (state.currentPage === 'Favorites') {
          const currentTrackIdInList = state.shuffleSongPlaylist[0].findIndex(
            (track) => track.id == state.selectSong[0][0].id
          )
          if (currentTrackIdInList) {
            nextSong = state.shuffleSongPlaylist[0][currentTrackIdInList + 1]
            if (nextSong !== undefined) {
              state.selectNextSong.pop()
              state.selectNextSong.push(nextSong)
              state.selectSong.pop()
              state.selectSong.push([nextSong])
            } else {
              audioRef.current.pause()
            }
          }
        }
      } else {
        currentIndex = action.payload.selectSong[0][0].id
        if (state.currentPage === 'Main' || state.currentPage === 'Category') {
          if (state.currentPlaylist === state.music) {
            const currentTrackIdInList = action.payload.music[0].findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList) {
              nextSong = action.payload.music[0][currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              }
            }
          } else if (state.currentPlaylist !== state.music) {
            const currentTrackIdInList = state.currentPlaylist[0].findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList) {
              nextSong = state.currentPlaylist[0][currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              } else {
                audioRef.current.pause()
              }
            }
          }
        } else if (state.currentPage === 'Favorites') {
          if (state.currentPlaylist === state.playlistFavorite) {
            const currentTrackIdInList = action.payload.FavSongs.findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList !== undefined) {
              nextSong = action.payload.FavSongs[currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              }
            }
          } else if (state.currentPlaylist !== state.playlistFavorite) {
            const currentTrackIdInList = state.currentPlaylist[0].findIndex(
              (track) => track.id == state.selectSong[0][0].id
            )
            if (currentTrackIdInList !== undefined) {
              nextSong = state.currentPlaylist[0][currentTrackIdInList + 1]
              if (nextSong !== undefined) {
                state.selectNextSong.pop()
                state.selectNextSong.push(nextSong)
                state.selectSong.pop()
                state.selectSong.push([nextSong])
              }
            }
          }
        }

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
          if (
            state.currentPage === 'Main' ||
            state.currentPage === 'Category'
          ) {
            if (state.currentPlaylist === state.music) {
              const currentTrackIdInList = action.payload.music[0].findIndex(
                (track) => track.id == state.selectSong[0][0].id
              )
              if (currentTrackIdInList) {
                prevSong = action.payload.music[0][currentTrackIdInList - 1]
                if (prevSong !== undefined) {
                  state.selectNextSong.pop()
                  state.selectNextSong.push(prevSong)
                  state.selectSong.pop()
                  state.selectSong.push([prevSong])
                }
              }
            } else if (state.currentPlaylist !== state.music) {
              const currentTrackIdInList = state.currentPlaylist[0].findIndex(
                (track) => track.id == state.selectSong[0][0].id
              )
              if (currentTrackIdInList) {
                prevSong = state.currentPlaylist[0][currentTrackIdInList - 1]
                if (prevSong !== undefined) {
                  state.selectNextSong.pop()
                  state.selectNextSong.push(prevSong)
                  state.selectSong.pop()
                  state.selectSong.push([prevSong])
                }
              }
            }
          } else if (state.currentPage === 'Favorites') {
            if (state.currentPlaylist === state.playlistFavorite) {
              const currentTrackIdInList = action.payload.FavSongs.findIndex(
                (track) => track.id == state.selectSong[0][0].id
              )
              if (currentTrackIdInList) {
                prevSong = action.payload.FavSongs[currentTrackIdInList - 1]
                if (prevSong !== undefined) {
                  state.selectPrevSong.pop()
                  state.selectPrevSong.push(prevSong)
                  state.selectSong.pop()
                  state.selectSong.push([prevSong])
                }
              }
            } else if (state.currentPlaylist !== state.playlistFavorite) {
              const currentTrackIdInList = state.currentPlaylist[0].findIndex(
                (track) => track.id == state.selectSong[0][0].id
              )
              if (currentTrackIdInList) {
                prevSong = state.currentPlaylist[0][currentTrackIdInList - 1]
                if (prevSong !== undefined) {
                  state.selectPrevSong.pop()
                  state.selectPrevSong.push(prevSong)
                  state.selectSong.pop()
                  state.selectSong.push([prevSong])
                }
              }
            }
          }

          if (currentIndex > 8 && prevSong !== undefined) {
            state.selectPrevSong.pop()
            state.selectPrevSong.push(prevSong)
            state.selectSong.pop()
            state.selectSong.push([prevSong])
          } else if (prevSong !== undefined) {
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
  unickedFiltredDate,
  FilterBase,
  filterToggle,
  searchBase,
  searchToggle,
  setBaseMusic,
  addMyTracks,
  addCurrentTrack,
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
