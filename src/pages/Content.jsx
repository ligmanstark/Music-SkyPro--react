import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { MiddleContent } from '../app-src/layout/layout-content/MiddleContent'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import React, { useEffect, useState, useContext } from 'react'
import { getAllTracks, getTrackById } from '../app-src/api/track'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/components/styles/style'
import { searchID } from '../app-src/helpers/searchID'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { AppContext } from '../context'
import { useSelector, useDispatch } from 'react-redux'
import { setterSong } from '../store/musicSlice'

const Content = () => {
  const { user } = useContext(AppContext)
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const [song, setSelecSong] = useState([])
  const selectSong = useSelector((state) => state.musicReducer.selectSong)

  const dispatch = useDispatch()
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

  const handleSelectSong = (event) => {
    const target = event.target
    const valueName = target.innerHTML
    searchFunc(getTrackById, searchID(music, valueName).id + '/', setSelecSong)
  }
  useEffect(() => {
    setterSelectSong()
  }, [song])

  useEffect(() => {
    getAllTracks().then((data) => {
      setMusic(data.data)
      setFilteredMusic([...new Set(data.data.map((e) => e.author))])
    })
  }, [])

  const searchTrack = (id) => {
    getTrackById(id).then((data) => {
      const flat = [data.data].flat(1)
      setMusic(flat)
    })
  }

  const handleChangeMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <Navigation handleChangeMenu={handleChangeMenu} isOpen={isOpen} />
          <MiddleContent
            music={music}
            searchTrack={searchTrack}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            handleSelectSong={handleSelectSong}
          />
          {!music.length ? <PreloaderSideBar /> : <Sidebar user={user} />}
        </S.Main>
        {!song.length ? '' : <PlayerBar music={music} />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { Content }
