import React, { useState, useEffect } from 'react'
function Search(props) {
  const { searchTrack = Function.prototype } = props

  const setValueSearch = () => {
    const userValueSearch = localStorage.getItem('valueSearch')
    return userValueSearch ? userValueSearch : ''
  }

  const [search, setSearch] = useState('')
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      searchTrack(search)
    }
  }

  useEffect(() => {
    localStorage.setItem('valueSearch', search)
    return () => {}
  }, [search])
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
