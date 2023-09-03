import NavigationMyPlaylist from '../app-src/layout/layout-myPlaylist/NavigationMyPlaylist'
import MiddleContentMyPlaylist from '../app-src/layout/layout-myPlaylist/MiddleMyPlaylist'
import SidebarMyPlaylist from '../app-src/layout/layout-myPlaylist/SidebarMyPlaylist'
import React, { useEffect, useState } from 'react'
import {
  getAllTracks,
  getTrackById,
  getTrackSelectionById,
} from '../app-src/function/response'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/styles/style'
import { useParams } from 'react-router-dom'

function MyPlaylist() {
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const categoryId = useParams()

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

  useEffect(() => {
    getTrackSelectionById('1/').then((data) => {
      setMusic(data.data.items)
      setFilteredMusic([...new Set(data.data.items.map((e) => e.author))])
      console.log(data.data.items)
    })
  }, [categoryId.id])

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
          <NavigationMyPlaylist
            handleChangeMenu={handleChangeMenu}
            isOpen={isOpen}
          />
          <MiddleContentMyPlaylist
            music={music}
            searchTrack={searchTrack}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
          />
          {!music.length ? <PreloaderSideBar /> : <SidebarMyPlaylist />}
        </S.Main>
        <PlayerBar music={music} />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { MyPlaylist }
