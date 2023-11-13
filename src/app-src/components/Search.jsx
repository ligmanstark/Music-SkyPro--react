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
import { useDispatch, useSelector } from 'react-redux'
const Search = (props) => {
  const [isSearch, setIsSearch] = useState(false)
  const { music = [] } = props
  const [search, setSearch] = useState('')
  const musicSearch = useSelector((state) => state.musicReducer.musicSearch)
  const dispatch = useDispatch()
  console.log(music)
  const [setMusic, {}] = useGetTrackByIdMutation()
  const searchMusic = (event) => {
    console.log(event.keyCode)
    const targer = event.targer
    console.log(targer)
    if (search !== '') {
      const newSearch = search[0].toUpperCase() + search.slice(1)
      console.log(musicSearch, newSearch)

      console.log(searchID(musicSearch, newSearch).id)

      const searchId = searchID(musicSearch, newSearch).id

      if (event.keyCode === 13) {
        setIsSearch(true)
        setMusic(searchId)
          .unwrap()
          .then((data) => {
            dispatch(searchToggle(true))
            dispatch(searchBase(data))
          })
      }
    } else {
      setIsSearch(false)
      dispatch(searchToggle(false))
    }
    setSearch('')
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
