import { NavigationCategory } from '../app-src/layout/layout-category/NavigationCategory'
import { MiddleContentCategory } from '../app-src/layout/layout-category/MiddleContentCategory'
import React, { useEffect, useState, useContext } from 'react'
import { getTrackById, getTrackSelectionById } from '../app-src/api/track'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { PreloaderSideBar } from '../app-src/components/PreloaderSideBar'
import * as S from '../app-src/components/styles/style'
import { useParams } from 'react-router-dom'
import { searchID } from '../app-src/helpers/searchID'
import { searchFunc } from '../app-src/helpers/searchFunc'
import { AppContext } from '../context'
import { Sidebar } from '../app-src/layout/layout-content/Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { setterMusic, setterSong, addMyTracks } from '../store/slice/musicSlice'
import {
  useGetAllTracksQuery,
  useGetSectionTracksQuery,
  useLazyGetSectionTracksQuery,
} from '../store/service/serviceMusicApi'

import { setCurrentPage } from '../store/slice/musicSlice'

const Category = (props) => {
  const {
    toggleLike = Function.prototype,
    handleSelectSong = Function.prototype,
  } = props
  const { user } = useContext(AppContext)
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])
  const [lengthFilter, setLengthFilter] = useState(null)
  const [song, setSelecSong] = useState([])
  const [url, setUrl] = useState('')
  const categoryId = useParams()
  const [countSection, setCountSection] = useState(categoryId)

  const { data = [], isLoading } = useGetSectionTracksQuery(countSection)
  const [fetchSelection] = useLazyGetSectionTracksQuery()

  const mySelectionSongs = useSelector(
    (state) => state.musicReducer.SelectionMusic
  )
  const searchBase = useSelector((state) => state.musicReducer.search)
  const isSearch = useSelector((state) => state.musicReducer.isSearch)

  const dispatch = useDispatch()

  const setCurrent = () => {
    dispatch(setCurrentPage('Category'))
  }

  console.log(countSection)

  const setterSelectSong = () => {
    dispatch(setterSong(song))
  }

  const setterSelectMusic = () => {
    dispatch(addMyTracks(data.items))
  }

  useEffect(() => {
    fetchSelection()
      .unwrap()
      .then(() => {
        setMusic(data.items)
        setterSelectMusic()
      })
      .catch((error) => {
        console.log(error)
      })
  }, [data.items])

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(data.items.map((e) => e.author))])
      setLengthFilter([...new Set(data.map((e) => e.author))].length)
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      const arr = [...new Set(data.items.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      setFilteredMusic(arr)
      setLengthFilter(arr.length)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      setFilteredMusic([...new Set(data.items.map((e) => e.genre))])
      setLengthFilter([...new Set(data.items.map((e) => e.genre))].length)
      setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      setLengthFilter(null)
      setNameFilter('')
    }
  }

  useEffect(() => {
    setMusic()
    setCurrent()
    setterSelectMusic()
  }, [data.items])

  useEffect(() => {
    setCountSection(categoryId.id)
    setMusic(data.items)
    console.log(data.items)
    setterSelectMusic()
    switch (categoryId.id) {
      case '1':
        setCountSection(categoryId.id)
        console.log(categoryId.id)
        return setUrl('Плейлист дня')

      case '2':
        setCountSection(categoryId.id)

        return setUrl('100 танцевальных хитов')
      case '3':
        setCountSection(categoryId.id)

        return setUrl('Инди-заряд')
    }
  }, [categoryId.id, data.items])

  useEffect(() => {
    setCurrent()
    if (!isSearch) {
      setMusic(data.items)
    } else {
      setMusic([searchBase])
    }
  })

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
            countSection={countSection}
            music={music}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
            lengthFilter={lengthFilter}
            url={url}
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

export { Category }
