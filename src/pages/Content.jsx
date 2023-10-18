import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { MiddleContent } from '../app-src/layout/layout-content/MiddleContent'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import React, { useEffect, useState, useContext } from 'react'
import { getTrackById } from '../app-src/api/track'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/components/styles/style'
import { searchID } from '../app-src/helpers/searchID'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { AppContext } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import {
  setterMusic,
  setterSong,
  setCurrentPage,
  addCurrentTrack,
} from '../store/slice/musicSlice'

import { useGetAllTracksQuery } from '../store/service/serviceMusicApi'

const Content = () => {
  const { data = [], isLoading } = useGetAllTracksQuery()
  const currentPlaylist = useSelector(
    (state) => state.musicReducer.currentPlaylist
  )
  console.log(currentPlaylist)
  const { user, isPlay } = useContext(AppContext)
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const [song, setSelecSong] = useState([])

  const dispatch = useDispatch()
  const setCurrent = () => {
    dispatch(setCurrentPage('Main'))
  }

  useEffect(() => {
    setCurrent()
    setMusic(data)
  })

  const setterSelectMusic = () => {
    dispatch(setterMusic(music))
  }

  const setterSelectSong = () => {
    dispatch(setterSong(song))
  }

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(music.map((e) => e.author))])
      setLengthFilter([...new Set(music.map((e) => e.author))].length)
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      const arr = [...new Set(music.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      setFilteredMusic(arr)
      setLengthFilter(arr.length)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      setFilteredMusic([...new Set(music.map((e) => e.genre))])
      setLengthFilter([...new Set(music.map((e) => e.genre))].length)
      setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      setLengthFilter(null)
      setNameFilter('')
    }
  }

  const handleSelectSong = async (event) => {
    const target = event.target
    const valueName = target.innerHTML

    await searchFunc(
      getTrackById,
      searchID(music, valueName).id + '/',
      setSelecSong
    )
  }
  useEffect(() => {
    setterSelectSong()
  }, [song])

  useEffect(() => {
    setFilteredMusic([...new Set(music.map((e) => e.author))])
  }, [])

  useEffect(() => {
    setterSelectMusic()
  }, [music])

  ////СЛОМАНО
  const searchTrack = (id) => {
    getTrackById(id).then((data) => {
      const flat = data.data
      console.log(flat)
      setMusic(flat)
    })
  }
  /////////////////////////////////////

  const handleChangeMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <Navigation handleChangeMenu={handleChangeMenu} isOpen={isOpen} />
          <MiddleContent
            music={data}
            searchTrack={searchTrack}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            handleSelectSong={handleSelectSong}
          />
          {isLoading ? <PreloaderSideBar /> : <Sidebar user={user} />}
        </S.Main>
        {!song.length ? '' : <PlayerBar isPlay={isPlay} />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { Content }
