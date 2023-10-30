import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterBase, filterToggle } from '../../store/slice/musicSlice'
import { compareNew, compareOld } from '../helpers/compare'
const ListFilter = (props) => {
  const musicBack = useSelector((state) => state.musicReducer.music)
  const SelectionBack = useSelector(
    (state) => state.musicReducer.SelectionMusic
  )
  const playlistFavoriteBack = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )
  const currentPage = useSelector((state) => state.musicReducer.currentPage)
  const { filteredMusic = [], nameFilter, music = [] } = props
  let newMusic = music
  const [filterLand, SetFilterLand] = useState()
  const dispatch = useDispatch()

  let copyForSortNew = [...music]
  let copyForSortOld = [...music]
  const filterMusic = (event) => {
    const value = event.target.innerHTML
    SetFilterLand(value)
    dispatch(filterToggle(true))
    if (filterLand !== '') {
      if (nameFilter === 'исполнителю') {
        const arr = newMusic.filter((el) => el.author === value)
        dispatch(FilterBase(arr))
      } else if (nameFilter === 'году выпуска') {
        let arr = newMusic.filter(
          (el) =>
            new Date(el.release_date).getFullYear() ===
            new Date(value).getFullYear()
        )
        console.log(arr)

        console.log(copyForSortNew.sort(compareNew))
        console.log(copyForSortOld.sort(compareOld))

        dispatch(FilterBase(arr))
      } else if (nameFilter === 'жанру') {
        const arr = newMusic.filter((el) => el.genre === value)
        dispatch(FilterBase(arr))
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
          />
        ))}
    </S.WindowFiltered>
  )
}

export { ListFilter }
