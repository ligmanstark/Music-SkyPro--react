import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FilterBase,
  filterToggle,
  setOpenedFilter,
  setNameFiltered,
  setUpdateMusic,
} from '../../store/slice/musicSlice'
import { compareNew, compareOld } from '../helpers/compare'
import { useGetAllTracksQuery } from '../../store/service/serviceMusicApi'
const ListFilter = (props) => {
  const { data = [] } = useGetAllTracksQuery()
  let value
  let arr
  const musicBack = useSelector((state) => state.musicReducer.music)
  const musicSaver = useSelector((state) => state.musicReducer.baseMusic)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  const searchBase = useSelector((state) => state.musicReducer.musicSearch)
  const filterDefault = useSelector(
    (state) => state.musicReducer.filteredByGenge
  )
  const SelectionBack = useSelector(
    (state) => state.musicReducer.SelectionMusic
  )
  const playlistFavoriteBack = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )
  const currentPage = useSelector((state) => state.musicReducer.currentPage)

  const { filteredMusic = [], nameFilter, music = [] } = props
  console.log(music)
  let newMusic = musicSaver
  const [filterLand, SetFilterLand] = useState()
  // const [filter, setFilter] = useState('исполнителю')
  const [base, setBase] = useState()
  const [newest, setNewest] = useState(false)
  const [oldest, setOldest] = useState(false)
  const dispatch = useDispatch()

  let copyForSortNew
  let copyForSortOld
  let copyForDefault
  let newFilterBase = filterBase

  useEffect(() => {
    if (filterBase.length > 0) {
      copyForSortNew = [...newFilterBase]
      copyForSortOld = [...newFilterBase]
      copyForDefault = [...newMusic]
    } else {
      copyForSortNew = [...musicSaver]
      copyForSortOld = [...musicSaver]
      copyForDefault = [...musicSaver]
    }
  })

  useEffect(() => {
    nameFilter
  })
  const FilteredBase = (arr, filter) => {
    dispatch(FilterBase(arr, filter))
  }

  const filterMusic = (event) => {
    if (music[0] !== 'Ничего не получилось найти') {
      value = event.target.innerHTML
      SetFilterLand(value)
      dispatch(filterToggle(true))
      if (filterLand !== '') {
        if (nameFilter === 'исполнителю') {
          arr = newMusic.filter((el) => el.author === value)
          FilteredBase([arr, 'исполнителю'])
        } else if (nameFilter === 'году выпуска') {
          arr = newMusic.filter(
            (el) =>
              new Date(el.release_date).getFullYear() ===
              new Date(value).getFullYear()
          )
          console.log(arr)
          FilteredBase([arr, filter])
        } else if (nameFilter === 'жанру') {
          arr = newMusic.filter((el) => el.genre === value)
          FilteredBase([arr, 'жанру'])
        }
      }
    } else {
      dispatch(filterToggle(false))
    }
  }

  const handleAllTracks = () => {
    switch (currentPage) {
      case 'Main':
        dispatch(filterToggle(false))

        return dispatch(FilterBase(musicBack[0]))

      case 'Category':
        dispatch(filterToggle(false))
        return dispatch(FilterBase(SelectionBack))

      case 'Favorites':
        dispatch(filterToggle(false))
        return dispatch(FilterBase(playlistFavoriteBack))

      default:
        break
    }
    dispatch(FilterBase(musicBack[0]))
  }
  const handleYears = (event) => {
    dispatch(filterToggle(true))
    const value = event.target.innerHTML
    switch (value) {
      case 'По умолчанию':
        setBase('По умолчанию')
        setNewest(false)
        setOldest(false)
        return dispatch(FilterBase(copyForDefault))

      case 'Сначала новые':
        setBase('Сначала новые')

        copyForSortNew.sort(compareNew)
        setNewest(true)
        setOldest(false)
        return dispatch(FilterBase(copyForSortNew))

      case 'Сначала старые':
        setBase('Сначала старые')

        copyForSortOld.sort(compareOld)
        setNewest(false)
        setOldest(true)
        return dispatch(FilterBase(copyForSortOld))

      default:
        dispatch(filterToggle(false))

        break
    }
  }

  return (
    <S.WindowFiltered
      className="window-filtered"
      style={
        nameFilter === 'исполнителю'
          ? { left: '450px' }
          : nameFilter === 'году выпуска'
          ? { left: '560px' }
          : nameFilter === 'жанру'
          ? { left: '600px' }
          : { left: '' }
      }
    >
      {music[0] !== 'Ничего не получилось найти' ? (
        <>
          <>
            {nameFilter === 'году выпуска' ? (
              <>
                <S.FilterAuthorList onClick={handleYears}>
                  По умолчанию
                </S.FilterAuthorList>
                <br />
                {newest ? (
                  <S.FilterAuthorList
                    onClick={handleYears}
                    style={{ color: 'purple' }}
                  >
                    Сначала новые
                  </S.FilterAuthorList>
                ) : (
                  <S.FilterAuthorList onClick={handleYears}>
                    Сначала новые
                  </S.FilterAuthorList>
                )}
                <br />
                {oldest ? (
                  <S.FilterAuthorList
                    onClick={handleYears}
                    style={{ color: 'purple' }}
                  >
                    Сначала старые
                  </S.FilterAuthorList>
                ) : (
                  <S.FilterAuthorList onClick={handleYears}>
                    Сначала старые
                  </S.FilterAuthorList>
                )}
                <br />
              </>
            ) : (
              <S.FilterAuthorList onClick={handleAllTracks}>
                Все треки
              </S.FilterAuthorList>
            )}
          </>
          <>
            {nameFilter !== 'году выпуска' &&
              filteredMusic &&
              filteredMusic.map((el) => (
                <ItemFilter
                  key={el.el}
                  author={el}
                  image="img/icon/sprite.svg#icon-note"
                  tackTimeIcon="img/icon/sprite.svg#icon-like"
                  filterMusic={filterMusic}
                  filteredMusic={filteredMusic}
                />
              ))}
          </>
        </>
      ) : (
        <>
          <p></p>
        </>
      )}
    </S.WindowFiltered>
  )
}

export { ListFilter }
