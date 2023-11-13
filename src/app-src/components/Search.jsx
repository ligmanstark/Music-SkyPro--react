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
  const searchMusic = () => {
    if (search !== '') {
      if (search.length > 3) {
        console.log(music, search)

        console.log(searchID(music, search).id)

        const searchId = searchID(music, search).id

        setMusic(searchId)
          .unwrap()
          .then((data) => {
            setIsSearch((prev) => !prev)
            dispatch(searchToggle(isSearch))
            dispatch(searchBase(data))
          })

        setSearch('')
      } else {
        setIsSearch((prev) => !prev)
        dispatch(searchToggle(isSearch))
      }
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
