import React, { useState } from 'react'

function Filter(props) {
  const { music = [], handleOpenFilter = Function.prototype } = props

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text"
        onClick={handleOpenFilter}
      >
        исполнителю
      </div>
      <div
        className="filter__button button-year _btn-text"
        onClick={handleOpenFilter}
      >
        году выпуска
      </div>
      <div
        className="filter__button button-genre _btn-text"
        onClick={handleOpenFilter}
      >
        жанру
      </div>
    </div>
  )
}

export { Filter }
