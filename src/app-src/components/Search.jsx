import React, { useState, useEffect } from 'react'
import { searchID } from '../helpers/searchID'
import * as S from './styles/style'
import searchimg from '../../img/icon/search.svg'
import { useGetAllTracksQuery } from '../../store/service/serviceMusicApi'
const Search = (props) => {
  const { data = [], isLoading } = useGetAllTracksQuery()
  const { searchTrack = Function.prototype } = props

  const [search, setSearch] = useState('')
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      if (search === '') {
        searchTrack('all/')
      } else {
        searchTrack(searchID(data, search).id + '/')
        setSearch('')
      }
    }
  }

  return (
    <S.CenterblockSearch className="centerblock__search search">
      <S.SearchSVG src={searchimg} className="search__svg"></S.SearchSVG>
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
