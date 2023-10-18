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
import { setterMusic, setterSong } from '../store/slice/musicSlice'
import {
  useGetAllTracksQuery,
  useGetSectionTracksQuery,
  useLazyGetSectionTracksQuery,
} from '../store/service/serviceMusicApi'
const Category = () => {
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

  // const { data = [], isLoading } = useGetAllTracksQuery()

  const { data = [], isLoading } = useGetSectionTracksQuery(countSection)
  const [fetchSelection] = useLazyGetSectionTracksQuery()

  const dispatch = useDispatch()
  const setterSelectMusic = () => {
    dispatch(setterMusic(data.items))
  }

  const setterSelectSong = () => {
    dispatch(setterSong(song))
  }

  useEffect(() => {
    fetchSelection()
      .unwrap()
      .then(() => {
        setterSelectMusic()
      })
      .catch((error) => {
        console.log(error)
      })
  }, [data])

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(data.map((e) => e.author))])
      setLengthFilter([...new Set(data.map((e) => e.author))].length)
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      const arr = [...new Set(data.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      setFilteredMusic(arr)
      setLengthFilter(arr.length)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      setFilteredMusic([...new Set(data.map((e) => e.genre))])
      setLengthFilter([...new Set(data.map((e) => e.genre))].length)
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
    setterSelectMusic()
  }, [data])

  useEffect(() => {
    setterSelectSong()
  }, [song])

  useEffect(() => {
    setCountSection(categoryId.id)
    setMusic(data.items)
    console.log(data.items)
    // if (!isLoading) {
    //   setFilteredMusic([...new Set(data.items.map((e) => e.author))])
    // }
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
  }, [categoryId.id, data])
  ///СЛОМАНО
  console.log(typeof countSection)
  const searchTrack = (id) => {
    getTrackById(id).then((data) => {
      const flat = [data.data].flat(1)
      setMusic(flat)
    })
  }
  ////
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
          {isLoading ? <PreloaderSideBar /> : <Sidebar user={user} />}
        </S.Main>
        {!song.length ? '' : <PlayerBar />}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export { Category }
