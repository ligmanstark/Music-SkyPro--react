import React, { useState, useEffect } from 'react'
import { searchID } from '../function/searchID'
import * as S from '../styles/style'
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
    <S.CenterblockSearch className="centerblock__search search">
      <S.SearchSVG className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSVG>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleClick}
      ></S.SearchText>
    </S.CenterblockSearch>
  )
}

export { Search }
