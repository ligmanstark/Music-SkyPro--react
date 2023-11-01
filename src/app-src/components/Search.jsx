import React, { useState, useEffect } from 'react'
import { searchID } from '../helpers/searchID'
import * as S from './styles/style'
import searchimg from '../../img/icon/search.svg'
import {
  useGetAllTracksQuery,
  useGetTrackByIdMutation,
} from '../../store/service/serviceMusicApi'
import {
  searchToggle,
  addCurrentTrack,
  searchBase,
} from '../../store/slice/musicSlice'
import { useDispatch } from 'react-redux'
const Search = (props) => {
  const [isSearch, setIsSearch] = useState(false)
  const { music = [] } = props
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const [setMusic, {}] = useGetTrackByIdMutation()

  const searchMusic = () => {
    if (search !== '') {
      const searchId = searchID(music, search).id
      setMusic(searchId)
        .unwrap()
        .then((data) => {
          setIsSearch((prev) => !prev)
          dispatch(searchToggle(isSearch))
          dispatch(searchBase(data))
          setSearch('')
        })
    } else {
      setIsSearch((prev) => !prev)
      dispatch(searchToggle(isSearch))
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
        onKeyDown={searchMusic}
      ></S.SearchText>
    </S.CenterblockSearch>
  )
}

export { Search }
