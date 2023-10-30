import React, { useState, useEffect } from 'react'
import { QuantitySongsInFilter } from './QuantitySongsInFilter'
import { useDispatch, useSelector } from 'react-redux'
import { FilterBase } from '../../store/slice/musicSlice'
import { useGetTrackByIdMutation } from '../../store/service/serviceMusicApi'
import { searchID } from '../helpers/searchID'
import * as S from './styles/style'
const Filter = (props) => {
  const {
    handleOpenFilter = Function.prototype,
    nameFilter,
    lengthFilter,
    music = [],
  } = props
  const [filterLand, SetFilterLand] = useState()
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const dispatch = useDispatch()
  const [setFilter, {}] = useGetTrackByIdMutation()

  const filterMusic = (event) => {
    if (isFilter) {
      const value = event.target.innerHTML
      SetFilterLand(value)
      if (filterLand !== '') {
        const searchId = searchID(music, filterLand).genre
        setFilter(searchId)
          .unwrap()
          .then((data) => {
            dispatch(FilterBase(data))
          })
      }
    }
  }

  return (
    <S.CenterblockFilter className="centerblock__filter filter">
      <S.FilterTittle className="filter__title">Искать по:</S.FilterTittle>
      <S.FilterButton
        className="filter__button button-author _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'исполнителю'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        исполнителю
      </S.FilterButton>
      <S.FilterButton
        className="filter__button button-year _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'году выпуска'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        году выпуска
      </S.FilterButton>
      <S.FilterButton
        className="filter__button button-genre _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'жанру'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        жанру
      </S.FilterButton>
      <QuantitySongsInFilter
        lengthFilter={lengthFilter}
        nameFilter={nameFilter}
      />
    </S.CenterblockFilter>
  )
}

export { Filter }
