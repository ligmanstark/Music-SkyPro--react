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
  setBaseMusic,
  setOpenedFilter,
  setNameFiltered,
} from '../store/slice/musicSlice'

import {
  useGetAllTracksQuery,
  useGetTrackByIdMutation,
  useSetLikeMutation,
  useSetUnlikeMutation,
} from '../store/service/serviceMusicApi'

const Content = (props) => {
  const isSearch = useSelector((state) => state.musicReducer.isSearch)
  const searchBase = useSelector((state) => state.musicReducer.search)
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  const filteredByGenge = useSelector(
    (state) => state.musicReducer.filteredByGenge
  )
  const filteredByYear = useSelector(
    (state) => state.musicReducer.filteredByYear
  )
  const filteredByName = useSelector(
    (state) => state.musicReducer.filteredByName
  )
  const filteredName = useSelector((state) => state.musicReducer.filteredName)

  const {
    toggleLike = Function.prototype,
    handleSelectSong = Function.prototype,
  } = props
  const { data = [], isLoading } = useGetAllTracksQuery()
  const [getTrackById, {}] = useGetTrackByIdMutation()
  const [setLike, {}] = useSetLikeMutation()
  const [setUnlike, {}] = useSetUnlikeMutation()

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
    if (!!isFilter) {
      setMusic(filterBase)
    }
    dispatch(setBaseMusic(data))
  }, [isFilter, isSearch, setLike, setUnlike, data])

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    dispatch(setOpenedFilter(true))
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      dispatch(setNameFiltered('исполнителю'))

      setFilteredMusic([...new Set(data.map((e) => e.author))])

       setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      dispatch(setNameFiltered('году выпуска'))

      const arr = [...new Set(data.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      let newArr = [...new Set(arr)]
      setFilteredMusic(newArr)
      setLengthFilter(newArr.length)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      dispatch(setNameFiltered('жанру'))
      setFilteredMusic([...new Set(data.map((e) => e.genre))])
       setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      dispatch(setOpenedFilter(false))

      setLengthFilter(null)
      setNameFilter('')
    }
  }

  useEffect(() => {
    setFilteredMusic([...new Set(music.map((e) => e.author))])
  }, [])
  useEffect(() => {
    setLengthFilter(filterBase.length)
  })

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
