import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { MiddleContent } from '../app-src/layout/layout-content/MiddleContent'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import React, { useEffect, useState } from 'react'
import { getAllTracks, getTrackById } from '../app-src/function/response'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/styles/style'
import { searchID } from '../app-src/function/searchID'
import { searchFunc } from '../app-src/function/searchFunc'
const Content = (props) => {
  const { user } = props

  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const [selectSong, setSelecSong] = useState([])

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
    console.log(typeof valueName)

    searchFunc(getTrackById, searchID(music, valueName).id + '/', setSelecSong)
    console.log(selectSong)
  }

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
        {!selectSong.length ? (
          ''
        ) : (
          <PlayerBar music={music} selectSong={selectSong} />
        )}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { Content }