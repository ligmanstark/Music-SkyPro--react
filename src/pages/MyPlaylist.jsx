import { NavigationMyPlaylist } from '../app-src/layout/layout-myPlaylist/NavigationMyPlaylist'
import { MiddleContentMyPlaylist } from '../app-src/layout/layout-myPlaylist/MiddleMyPlaylist'
import React, { useEffect, useState, useContext } from 'react'
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
} from '../store/slice/musicSlice'

import {
  useGetFavTracksQuery,
  useLazyGetFavTracksQuery,
  usePostTokenRefreshMutation,
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../store/service/serviceMusicApi'

import { setAccessToken } from '../store/slice/tokenSlice'
import { setCurrentPage, setterMusic } from '../store/slice/musicSlice'

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
  const [postTokenRefresh, {}] = usePostTokenRefreshMutation()

  const myFavTracks = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )

  const isSearch = useSelector((state) => state.musicReducer.isSearch)
  const searchBase = useSelector((state) => state.musicReducer.search)

  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)

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

  if (myFavTracks) {
    dispatch(setCurrentPage('Favorites'))
  }

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(data.map((e) => e.author))])
      setLengthFilter([...new Set(data.map((e) => e.author))].length)
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      const arr = [...new Set(data.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      setFilteredMusic(arr)
      setLengthFilter(arr.length)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      setFilteredMusic([...new Set(data.map((e) => e.genre))])
      setLengthFilter([...new Set(data.map((e) => e.genre))].length)
      setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      setLengthFilter(null)
      setNameFilter('')
    }
  }

  useEffect(() => {
    setMusic(data)
    setFilteredMusic([...new Set(data.map((e) => e.author))])
  }, [data])

  useEffect(() => {
    dispatch(setCurrentPage('Favorites'))
    if (!isSearch) {
      setMusic(data)
    } else {
      setMusic([searchBase])
    }
    if (isFilter) {
      setMusic(filterBase)
    }
  }, [isFilter, isSearch, setLike, setUnlike, data])
  const handleChangeMenu = () => {
    setOpen((prev) => !prev)
  }

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
