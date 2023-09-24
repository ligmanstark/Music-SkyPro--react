import { NavigationCategory } from '../app-src/layout/layout-category/NavigationCategory'
import { MiddleContentCategory } from '../app-src/layout/layout-category/MiddleContentCategory'
import { SidebarCategory } from '../app-src/layout/layout-category/SidebarCategory'
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
import { searchID } from '../app-src/function/searchID'
import { searchFunc } from '../app-src/function/searchFunc'

const Category = (props) => {
  const { user } = props
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const [selectSong, setSelecSong] = useState([])
  const [url, setUrl] = useState('')
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

  const handleSelectSong = (event) => {
    const target = event.target
    const valueName = target.innerHTML
    console.log(typeof valueName)

    searchFunc(getTrackById, searchID(music, valueName).id + '/', setSelecSong)
    console.log(selectSong)
  }

  useEffect(() => {
    getTrackSelectionById(categoryId.id).then((data) => {
      setMusic(data.data.items)
      setFilteredMusic([...new Set(data.data.items.map((e) => e.author))])
      console.log(data.data.items)
      switch (categoryId.id) {
        case '1':
          return setUrl('Плейлист дня')
        case '2':
          return setUrl('100 танцевальных хитов')
        case '3':
          return setUrl('Инди-заряд')
      }
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
          <NavigationCategory
            handleChangeMenu={handleChangeMenu}
            isOpen={isOpen}
          />
          <MiddleContentCategory
            music={music}
            searchTrack={searchTrack}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            url={url}
            handleSelectSong={handleSelectSong}
          />
          {!music.length ? (
            <PreloaderSideBar />
          ) : (
            <SidebarCategory user={user} />
          )}
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

export { Category }
