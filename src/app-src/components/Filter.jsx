import React, { useState } from 'react'
import { QuantitySongsInFilter } from './QuantitySongsInFilter'

function Filter(props) {
  const {
    music = [],
    handleOpenFilter = Function.prototype,
    nameFilter,
    lengthFilter,
  } = props

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'исполнителю'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        исполнителю
      </div>
      <div
        className="filter__button button-year _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'году выпуска'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        году выпуска
      </div>
      <div
        className="filter__button button-genre _btn-text"
        onClick={handleOpenFilter}
        style={
          nameFilter === 'жанру'
            ? { borderColor: '#6b3ebe', color: '#6b3ebe' }
            : { borderColor: '', color: '' }
        }
      >
        жанру
      </div>
      <QuantitySongsInFilter
        lengthFilter={lengthFilter}
        nameFilter={nameFilter}
      />
    </div>
  )
}

export { Filter }
