import React, { useState } from 'react'
import { QuantitySongsInFilter } from './QuantitySongsInFilter'
import * as S from './styles/style'
const Filter = (props) => {
  const {
    handleOpenFilter = Function.prototype,
    nameFilter,
    lengthFilter,
  } = props

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
