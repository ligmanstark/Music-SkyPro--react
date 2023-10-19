import React, { useState, useEffect, useContext } from 'react'
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

const Layout = () => {
  const { user, isPlay } = useContext(AppContext)

  const { data = [], isLoading } = useGetAllTracksQuery()
  const [song, setSelectSong] = useState([])
  const [music, setMusic] = useState([])

  const [currentTime, setCurrentTime] = useState(null)
  const [duration, setDuration] = useState(null)

  const Page = useSelector((state) => state.musicReducer.currentPage)
  const dispatch = useDispatch()

  const setterSelectMusic = () => {
    dispatch(setterMusic(music))
  }

  const setterSelectSong = () => {
    dispatch(setterSong(song))
  }

  useEffect(() => {
    setMusic(data)
  })

  const handleSelectSong = async (event) => {
    const target = event.target
    const valueName = target.innerHTML

    await searchFunc(
      getTrackById,
      searchID(music, valueName).id + '/',
      setSelectSong
    )
  }
  useEffect(() => {
    setterSelectSong()
  }, [song])

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
      setDuration(audioRef.current.duration)

       setCurrentTime(audioRef.current.currentTime)
      if (currentTime !== null && currentTime !== NaN && duration !== NaN) {
        timeDuration({ currentTime, duration })
      }
    }, 100)
    return () => clearInterval(timeId)
  }, [currentTime, duration])

  return (
    <>
      {Page === 'Main' ? (
        <Content
          track={song}
          handleSelectSong={handleSelectSong}
          user={user}
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleTime={handleTime}
          setDuration={setDuration}
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
        />
      )}
    </>
  )
}

export { Layout }
