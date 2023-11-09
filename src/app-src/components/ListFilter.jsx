import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FilterBase,
  filterToggle,
  unickedFiltredDate,
} from '../../store/slice/musicSlice'
import { compareNew, compareOld } from '../helpers/compare'
const ListFilter = (props) => {
  let value
  let arr
  const musicBack = useSelector((state) => state.musicReducer.music)
  const musicSaver = useSelector((state) => state.musicReducer.baseMusic)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)

  const SelectionBack = useSelector(
    (state) => state.musicReducer.SelectionMusic
  )
  const playlistFavoriteBack = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )
  const currentPage = useSelector((state) => state.musicReducer.currentPage)
  const { filteredMusic = [], nameFilter, music = [] } = props
  let newMusic = musicSaver
  const [filterLand, SetFilterLand] = useState()
  const [filter, setFilter] = useState('исполнителю')
  const dispatch = useDispatch()

  let copyForSortNew = [...music]
  let copyForSortOld = [...music]
  // useEffect(() => {
  //   if (filterBase.length > 0) {
  //     copyForSortNew = [...filterBase]
  //     copyForSortOld = [...filterBase]
  //   } else if (filterBase.length === 0) {
  //     copyForSortNew = [...music]
  //     copyForSortOld = [...music]
  //   }
  // })

  useEffect(() => {
    nameFilter
  });
  const FilteredBase = (arr, filter) => {
    dispatch(FilterBase(arr, filter))
  }

  const filterMusic = (event) => {
    value = event.target.innerHTML
    SetFilterLand(value)
    dispatch(filterToggle(true))
    if (filterLand !== '') {
      if (nameFilter === 'исполнителю') {
        setFilter('исполнителю')
        arr = newMusic.filter((el) => el.author === value)
        FilteredBase([arr, filter])
      } else if (nameFilter === 'году выпуска') {
        setFilter('году')
        arr = newMusic.filter(
          (el) =>
            new Date(el.release_date).getFullYear() ===
            new Date(value).getFullYear()
        )
        console.log(arr)
        FilteredBase([arr, filter])
      } else if (nameFilter === 'жанру') {
        setFilter('жанру')
        arr = newMusic.filter((el) => el.genre === value)
        FilteredBase([arr, filter])
      }
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
    console.log(value)
    switch (value) {
      case 'По умолчанию':
        return handleAllTracks()
      case 'Сначала новые':
        copyForSortNew.sort(compareNew)
        return dispatch(FilterBase(copyForSortNew))

      case 'Сначала старые':
        copyForSortOld.sort(compareOld)
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
      {nameFilter === 'году выпуска' ? (
        <>
          <S.FilterAuthorList onClick={handleYears}>
            По умолчанию
          </S.FilterAuthorList>
          <br />
          <S.FilterAuthorList onClick={handleYears}>
            Сначала новые
          </S.FilterAuthorList>
          <br />
          <S.FilterAuthorList onClick={handleYears}>
            Сначала старые
          </S.FilterAuthorList>
          <br />
        </>
      ) : (
        <S.FilterAuthorList onClick={handleAllTracks}>
          Все треки
        </S.FilterAuthorList>
      )}

      {nameFilter !== 'году выпуска' &&
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
    </S.WindowFiltered>
  )
}

export { ListFilter }
