import React, { useState, useEffect } from 'react'
import { searchID } from '../function/searchID'

function Search(props) {
  const { searchTrack = Function.prototype, music = [] } = props

  const [search, setSearch] = useState('')
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      if (search === '') {
        searchTrack('all/')
      } else {
        searchTrack(searchID(music, search).id + '/')
        setSearch('')
      }
    }
  }

  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleClick}
      ></input>
    </div>
  )
}

export { Search }
