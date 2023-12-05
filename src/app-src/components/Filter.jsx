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
  console.log(music)
  const [filterLand, SetFilterLand] = useState()
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const musicSearch = useSelector((state) => state.musicReducer.musicSearch)
  const dispatch = useDispatch()
  const [setFilter, {}] = useGetTrackByIdMutation()
  console.log(musicSearch)
  return (
    <>
      {musicSearch && musicSearch[0] !== 'Ничего не получилось найти' ? (
        <>
          <S.CenterblockFilter className="centerblock__filter filter">
            <S.FilterTittle className="filter__title">
              Искать по:
            </S.FilterTittle>
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
        </>
      ) : (
        <>
          <S.CenterblockFilter className="centerblock__filter filter">
            <S.FilterTittle className="filter__title">
              Искать по:
            </S.FilterTittle>
            <S.FilterButton
              className="filter__button button-author _btn-text"
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
              style={
                nameFilter === 'жанру'
                  ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
                  : { borderColor: '', color: '' }
              }
            >
              жанру
            </S.FilterButton>
          </S.CenterblockFilter>
        </>
      )}
    </>
  )
}

export { Filter }
