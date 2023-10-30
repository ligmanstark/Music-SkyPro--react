import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { MiddleContent } from '../app-src/layout/layout-content/MiddleContent'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import React, { useEffect, useState, useContext } from 'react'
import { getTrackById } from '../app-src/api/track'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/components/styles/style'
import { AppContext } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentPage,
  setterMusic,
  filterToggle,
} from '../store/slice/musicSlice'

import {
  useGetAllTracksQuery,
  useGetTrackByIdMutation,
} from '../store/service/serviceMusicApi'

const Content = (props) => {
  const isSearch = useSelector((state) => state.musicReducer.isSearch)
  const searchBase = useSelector((state) => state.musicReducer.search)
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  console.log(isFilter)
  console.log(filterBase)
  const {
    toggleLike = Function.prototype,
    handleSelectSong = Function.prototype,
  } = props
  const { data = [], isLoading } = useGetAllTracksQuery()
  const [getTrackById, {}] = useGetTrackByIdMutation()
  const { user, isPlay } = useContext(AppContext)
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)

  const dispatch = useDispatch()
  const setCurrent = () => {
    dispatch(setCurrentPage('Main'))
  }

  useEffect(() => {
    setCurrent()
    if (!isSearch) {
      setMusic(data)
    } else if (isSearch) {
      setMusic([searchBase])
    }
    if (isFilter) {
      console.log('dddddd')
      setMusic(filterBase)
    }
  })
  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    console.log(isOpenFilter)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(music.map((e) => e.author))])

      setLengthFilter([...new Set(music.map((e) => e.author))].length)
      setNameFilter('исполнителю')
      console.log(filteredMusic)
    } else if (value === 'году выпуска') {
      const arr = [...new Set(music.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      let newArr = [...new Set(arr)]
      setFilteredMusic(newArr)
      setLengthFilter(newArr.length)
      console.log(arr)
      console.log(newArr)
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
    setFilteredMusic([...new Set(music.map((e) => e.author))])
  }, [])

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
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            handleSelectSong={handleSelectSong}
            toggleLike={toggleLike}
          />
          {isLoading ? <PreloaderSideBar /> : <Sidebar user={user} />}
        </S.Main>

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { Content }
