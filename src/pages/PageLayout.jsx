import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTrackById } from '../app-src/api/track'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { searchID } from '../app-src/helpers/searchID'
import { useSelector, useDispatch } from 'react-redux'
import { setterMusic, setterSong } from '../store/slice/musicSlice'
import { useGetAllTracksQuery } from '../store/service/serviceMusicApi'
import { Content } from '../pages/Content'
import { MyPlaylist } from '../pages/MyPlaylist'

import { AppContext } from '../context'

import { audioRef } from '../app-src/layout/layout-content/PlayBar'
import { autoNext } from '../store/slice/musicSlice'

import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'

import {
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../store/service/serviceMusicApi'
import { userLogout } from '../store/slice/userSlice'
const Layout = () => {
  const { user, isPlay } = useContext(AppContext)

  const { data = [], isLoading } = useGetAllTracksQuery()
  const [song, setSelectSong] = useState([])
  const [music, setMusic] = useState([])

  const [currentTime, setCurrentTime] = useState(null)
  const [duration, setDuration] = useState(null)

  const Page = useSelector((state) => state.musicReducer.currentPage)
  const FavSongs = useSelector((state) => state.musicReducer.playlistFavorite)
  const userId = Number(useSelector((state) => state.user.id))

  const [setLike, {}] = useSetLikeMutation()
  const [setUnlike, {}] = useSetUnlikeMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setterSelectMusic = () => {
    dispatch(setterMusic(music))
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
  }

  useEffect(() => {
    setterSelectMusic()
  }, [music])
  ///////////////////////продолжительность трека
  const timeDuration = (time) => {
    dispatch(autoNext(time))
  }

  const handleTime = () => {
    audioRef.current.currentTime = currentTime
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      if (audioRef.current !== undefined) {
        setDuration(audioRef.current.duration)

        setCurrentTime(audioRef.current.currentTime)
        if (currentTime !== null && currentTime !== NaN && duration !== NaN) {
          timeDuration({ currentTime, duration })
        }
      }
    }, 100)
    return () => clearInterval(timeId)
  }, [currentTime, duration])
  /////like or unlike
  const logout = () => {
    dispatch(userLogout())

    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }
  const toggleLike = (track) => {
    if ((track.stared_user ?? []).find((user) => user.id === userId)) {
      console.log('dislike')
      setUnlike(track)
        .unwrap()
        .catch((error) => {
          console.log(error)
          navigate('/login')
          logout()
        })
    } else if (!track.stared_user) {
      console.log('dislike')
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

  return (
    <>
      {Page === 'Main' ? (
        <Content
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleTime={handleTime}
          setDuration={setDuration}
          toggleLike={toggleLike}
        />
      ) : (
        <MyPlaylist
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleTime={handleTime}
          setDuration={setDuration}
          toggleLike={toggleLike}
        />
      )}
      {!song.length ? (
        ''
      ) : (
        <PlayerBar
          isPlay={isPlay}
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleTime={handleTime}
        />
      )}
    </>
  )
}

export { Layout }
