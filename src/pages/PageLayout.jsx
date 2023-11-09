import React, { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTrackById } from '../app-src/api/track'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { searchID } from '../app-src/helpers/searchID'
import { useSelector, useDispatch } from 'react-redux'
import { setterMusic, setterSong } from '../store/slice/musicSlice'
import { useGetAllTracksQuery } from '../store/service/serviceMusicApi'
import { Content } from '../pages/Content'
import { MyPlaylist } from '../pages/MyPlaylist'
import { Category } from '../pages/Category'

import { AppContext } from '../context'

import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import {
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../store/service/serviceMusicApi'
import { userLogout } from '../store/slice/userSlice'

export let audioRef = ''

const Layout = () => {
  audioRef = useRef(null)
  const { user, isPlay } = useContext(AppContext)

  const { data = [], isLoading } = useGetAllTracksQuery()
  const [song, setSelectSong] = useState([])
  const [music, setMusic] = useState([])

  const Page = useSelector((state) => state.musicReducer.currentPage)
  const FavSongs = useSelector((state) => state.musicReducer.playlistFavorite)
  const SelectSongs = useSelector((state) => state.musicReducer.SelectionMusic)
  const userId = Number(useSelector((state) => state.user.id))
  const filterName = useSelector((state) => state.musicReducer.qnuicFilterDate)

  const [setLike, {}] = useSetLikeMutation()
  const [setUnlike, {}] = useSetUnlikeMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setterSelectMusic = () => {
    if (Page === 'Main') {
      dispatch(setterMusic(music))
    }
    if (Page === 'Category') {
      dispatch(setterMusic(SelectSongs))
    }
  }

  const setterSelectSong = (currentPlaylist) => {
    dispatch(setterSong({ song, currentPlaylist }))
  }

  useEffect(() => {
    setMusic(data)
  })

  const handleSelectSong = (event) => {
    const target = event.target
    const valueName = target.innerHTML
    if (Page === 'Main') {
      searchFunc(
        getTrackById,
        searchID(music, valueName).id + '/',
        setSelectSong
      )
      setterSelectSong(music)
    } else if (Page === 'Favorites') {
      searchFunc(
        getTrackById,
        searchID(FavSongs, valueName).id + '/',
        setSelectSong
      )
      setterSelectSong(FavSongs)
    } else if (Page === 'Category') {
      searchFunc(
        getTrackById,
        searchID(SelectSongs, valueName).id + '/',
        setSelectSong
      )
      setterSelectSong(SelectSongs)
    }
  }
  if (Page === 'Main') {
    useEffect(() => {
      setterSelectSong(music)
    }, [song])
  } else if (Page === 'Favorites') {
    useEffect(() => {
      setterSelectSong(FavSongs)
    }, [song])
  } else if (Page === 'Category') {
    useEffect(() => {
      setterSelectSong(SelectSongs)
    }, [song])
  }

  useEffect(() => {
    setterSelectMusic()
  }, [music])

  /////like or unlike
  const logout = () => {
    dispatch(userLogout())
    localStorage.setItem('user', '')
    localStorage.removeItem('token')
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const toggleLike = (track) => {
    if ((track.stared_user ?? []).find((user) => user.id === userId)) {
      setUnlike(track)
        .unwrap()
        .catch((error) => {
          console.log(error)
          navigate('/login')
          logout()
        })
    } else if (!track.stared_user) {
      setUnlike(track)
        .unwrap()
        .catch((error) => {
          console.log(error)
          navigate('/login')
          logout()
        })
    } else {
      console.log('like')

      setLike(track)
        .unwrap()
        .catch((error) => {
          console.log(error)
          navigate('/login')
          logout()
        })
    }
  }

  useEffect((event) => {
    if (event !== undefined) {
      handleSelectSong()
    }
  }, [])
  return (
    <>
      {Page === 'Main' ? (
        <Content
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          toggleLike={toggleLike}
        />
      ) : Page === 'Favorites' ? (
        <MyPlaylist
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          toggleLike={toggleLike}
        />
      ) : (
        <Category
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          toggleLike={toggleLike}
        />
      )}
      {!song.length ? (
        ''
      ) : (
        <PlayerBar isPlay={isPlay} toggleLike={toggleLike} />
      )}
    </>
  )
}

export { Layout }
