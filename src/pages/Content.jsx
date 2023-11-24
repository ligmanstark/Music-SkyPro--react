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
  setMusicSearch,
  FilterBase,
  setUpdateMusic,
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
  const idNumber = useSelector((state) => state.musicReducer.idTrack)
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
  const searchData = useSelector((state) => state.musicReducer.search)
  const {
    toggleLike = Function.prototype,
    handleSelectSong = Function.prototype,
  } = props
  const { data = [], isLoading } = useGetAllTracksQuery()
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
      dispatch(setMusicSearch(data))
      console.log(filterBase)
    } else if (isSearch) {
      setMusic([searchBase])
      dispatch(setMusicSearch([searchBase]))
    }
    if (!!isFilter && !isSearch) {
      setMusic(filterBase)
      dispatch(setMusicSearch(filterBase))
    } else if (filterBase.length < 1 && isSearch) {
      setMusic([searchBase])
      dispatch(setMusicSearch([searchBase]))
    }

    dispatch(setBaseMusic(data))
  }, [isFilter, isSearch, setLike, setUnlike, data])

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    dispatch(setOpenedFilter(true))
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      dispatch(setNameFiltered('исполнителю'))
      if (!isSearch) {
        setFilteredMusic([...new Set(data.map((e) => e.author))])
      } else {
        setFilteredMusic([searchData.author])
      }

      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      dispatch(setNameFiltered('году выпуска'))
      if (!isSearch) {
        const arr = [...new Set(data.map((e) => e.release_date))]
          .filter((word) => word !== null)
          .map((e) => e.slice(0, 4))
        let newArr = [...new Set(arr)]
        setFilteredMusic(newArr)
        setLengthFilter(newArr.length)
      } else {
        const arr = [searchData.release_date]
          .filter((word) => word !== null)
          .map((e) => e.slice(0, 4))
        let newArr = [arr]
        setFilteredMusic(newArr)
        setLengthFilter(newArr.length)
      }

      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      dispatch(setNameFiltered('жанру'))
      if (!isSearch) {
        setFilteredMusic([...new Set(data.map((e) => e.genre))])
      } else {
        setFilteredMusic([searchData.genre])
      }
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

  // let value
  // let arr
  // const [filterLand, SetFilterLand] = useState()

  // const musicSaver = useSelector((state) => state.musicReducer.baseMusic)
  //  const FilteredBase = (arr, filter) => {
  //   dispatch(FilterBase(arr, filter))
  // }
  // const filterMusic = (event) => {
  //   if (music[0] !== 'Ничего не получилось найти') {
  //     value = event.target.innerHTML
  //     SetFilterLand(value)
  //     dispatch(filterToggle(true))
  //     if (filterLand !== '') {
  //       if (nameFilter === 'исполнителю') {
  //         arr = musicSaver.filter((el) => el.author === value)
  //         FilteredBase([arr, 'исполнителю'])
  //       } else if (nameFilter === 'году выпуска') {
  //         arr = musicSaver.filter(
  //           (el) =>
  //             new Date(el.release_date).getFullYear() ===
  //             new Date(value).getFullYear()
  //         )
  //         console.log(arr)
  //         FilteredBase([arr, 'году выпуска'])
  //       } else if (nameFilter === 'жанру') {
  //         arr = musicSaver.filter((el) => el.genre === value)
  //         FilteredBase([arr, 'жанру'])
  //       }
  //     }
  //   } else {
  //     dispatch(filterToggle(false))
  //   }
  // }

  // // useEffect(() => {
  // //   arr=data.filter((el)=>el.author===filterBase.author)
  // //   console.log('dsssdsasssa');
  // // }, [data]);

  useEffect(() => {
    if (filterBase[0] || searchBase.id) {
      if (idNumber !== NaN) {
        let newDat = [data.find((el) => el.id == idNumber)]
        let newAr = filterBase.filter((el) => el.id !== Number(idNumber))
        let newSearch = [searchBase].filter((el) => el.id !== Number(idNumber))

        let newFilterDate = [...newAr, ...newDat]
        let newSearchDate = [...newSearch, ...newDat]

        dispatch(FilterBase(newFilterDate))
        dispatch(setMusicSearch(newSearchDate))
        setMusic(newSearchDate)
      }
    }
  }, [data])
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
