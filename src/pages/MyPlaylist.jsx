import { NavigationMyPlaylist } from '../app-src/layout/layout-myPlaylist/NavigationMyPlaylist'
import { MiddleContentMyPlaylist } from '../app-src/layout/layout-myPlaylist/MiddleMyPlaylist'
import React, { useEffect, useState, useContext, useLayoutEffect } from 'react'
import {
  getAllTracks,
  getTrackById,
  getTrackSelectionById,
} from '../app-src/api/track'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/components/styles/style'
import { useParams } from 'react-router-dom'
import { searchID } from '../app-src/helpers/searchID'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { AppContext } from '../context'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import {
  setterSong,
  addCurrentTrack,
  addMyTracks,
  setCurrentPage,
  setterMusic,
  setBaseMusic,
  setOpenedFilter,
  setNameFiltered,
  setMusicSearch,
  FilterBase,
  filterToggle,
} from '../store/slice/musicSlice'

import {
  useGetFavTracksQuery,
  useLazyGetFavTracksQuery,
  usePostTokenRefreshMutation,
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../store/service/serviceMusicApi'

import { setAccessToken } from '../store/slice/tokenSlice'

const MyPlaylist = (props) => {
  const [setLike, {}] = useSetLikeMutation()
  const [setUnlike, {}] = useSetUnlikeMutation()
  const {
    toggleLike = Function.prototype,
    handleSelectSong = Function.prototype,
  } = props

  const dispatch = useDispatch()

  const { data = [], isLoading } = useGetFavTracksQuery()
  const [fetchFavorite] = useLazyGetFavTracksQuery()
  const refresh = localStorage.getItem('refreshToken')

  const myFavTracks = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )

  const isSearch = useSelector((state) => state.musicReducer.isSearch)
  const searchBase = useSelector((state) => state.musicReducer.search)
  const idNumber = useSelector((state) => state.musicReducer.idTrack)

  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  const searchData = useSelector((state) => state.musicReducer.search)

  const { user } = useContext(AppContext)
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)

  const categoryId = useParams()

  const setterSelectMusic = () => {
    dispatch(addMyTracks(data))
  }

  useEffect(() => {
    fetchFavorite()
      .unwrap()
      .then(() => {
        setterSelectMusic()
      })
      .catch((error) => {
        console.log(error)
      })
  }, [data])

  useEffect(() => {
    if (myFavTracks) {
      if (navigation.currentEntry.url.length === 52) {
        dispatch(setCurrentPage('Category'))
      } else if (navigation.currentEntry.url.length === 41) {
        dispatch(setCurrentPage('Main'))
      } else if (navigation.currentEntry.url.length === 51) {
        dispatch(setCurrentPage('Favorites'))
      }
    }
  })

  // if (myFavTracks) {
  //   if (navigation.currentEntry.url.length === 52) {
  //     dispatch(setCurrentPage('Category'))
  //   } else if (navigation.currentEntry.url.length === 41) {
  //     dispatch(setCurrentPage('Main'))
  //   } else if (navigation.currentEntry.url.length === 51) {
  //     dispatch(setCurrentPage('Favorites'))
  //   }  }

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    dispatch(setOpenedFilter(true))

    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      dispatch(setNameFiltered('исполнителю'))

      if (!isSearch) {
        setFilteredMusic([...new Set(data.map((e) => e.author))])
      } else {
        setFilteredMusic([searchData.author])
      }
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      dispatch(setNameFiltered('году выпуска'))
      if (!isSearch) {
        const arr = [...new Set(data.map((e) => e.release_date))]
          .filter((word) => word !== null)
          .map((e) => e.slice(0, 4))
        let newArr = [...new Set(arr)]
        setFilteredMusic(newArr)
        setLengthFilter(newArr.length)
      } else {
        const arr = [searchData.release_date]
          .filter((word) => word !== null)
          .map((e) => e.slice(0, 4))
        let newArr = [arr]
        setFilteredMusic(newArr)
        setLengthFilter(newArr.length)
      }
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      dispatch(setNameFiltered('жанру'))

      if (!isSearch) {
        setFilteredMusic([...new Set(data.map((e) => e.genre))])
      } else {
        setFilteredMusic([searchData.genre])
      }
      setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      dispatch(setOpenedFilter(false))

      setLengthFilter(null)
      setNameFilter('')
    }
  }

  useEffect(() => {
    setLengthFilter(filterBase.length)
  })
  useEffect(() => {
    setMusic(data)
    setFilteredMusic([...new Set(data.map((e) => e.author))])
  }, [data])

  useEffect(() => {
    if (navigation.currentEntry.url.length == 52) {
      dispatch(setCurrentPage('Category'))
    } else if (navigation.currentEntry.url.length == 41) {
      dispatch(setCurrentPage('Main'))
    } else if (navigation.currentEntry.url.length == 51) {
      dispatch(setCurrentPage('Favorites'))
    }
    if (!isSearch) {
      setMusic(data)
      dispatch(setMusicSearch(data))
    } else {
      setMusic([searchBase])
      dispatch(setMusicSearch([searchBase]))
    }
    if (isFilter) {
      setMusic(filterBase)
      dispatch(setMusicSearch(filterBase))
    } else if (filterBase.length < 1 && isSearch) {
      setMusic([searchBase])
      dispatch(setMusicSearch([searchBase]))
    }
    dispatch(setBaseMusic(data))
  }, [isFilter, isSearch, setLike, setUnlike, data])
  const handleChangeMenu = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    dispatch(setOpenedFilter(false))
    dispatch(filterToggle(false))
  }, [navigation.currentEntry.url])

  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <NavigationMyPlaylist
            handleChangeMenu={handleChangeMenu}
            isOpen={isOpen}
          />
          <MiddleContentMyPlaylist
            toggleLike={toggleLike}
            music={music}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            handleSelectSong={handleSelectSong}
          />
          {isLoading ? <PreloaderSideBar /> : <Sidebar user={user} />}
        </S.Main>

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { MyPlaylist }
