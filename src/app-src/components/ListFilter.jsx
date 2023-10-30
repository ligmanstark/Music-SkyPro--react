import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FilterBase,
  prevSong,
  filterToggle,
} from '../../store/slice/musicSlice'
import { useGetTrackByIdMutation } from '../../store/service/serviceMusicApi'
import { searchID } from '../helpers/searchID'
const ListFilter = (props) => {
  const musicBack = useSelector((state) => state.musicReducer.music)
  const { filteredMusic = [], nameFilter, music = [] } = props
  let newMusic = music
  const [filterLand, SetFilterLand] = useState()
  const dispatch = useDispatch()

  const filterMusic = (event) => {
    const value = event.target.innerHTML
    SetFilterLand(value)
    console.log(value)
    dispatch(filterToggle(true))
    if (filterLand !== '') {
      if (nameFilter === 'исполнителю') {
        const arr = newMusic.filter((el) => el.author === value)
        console.log(arr)
        dispatch(FilterBase(arr))
      } else if (nameFilter === 'году выпуска') {
        let arr = newMusic.find((el) => el.release_date.slice(0, 4) === value)
        console.log(arr)
        dispatch(FilterBase([arr]))
      } else if (nameFilter === 'жанру') {
        const arr = newMusic.filter((el) => el.genre === value)
        console.log(arr)
        dispatch(FilterBase(arr))
      } else if (filterLand) {
        console.log('хуй')
      }
    }
    console.log(music)
  }

  const handleAllTracks = () => {
    newMusic = musicBack[0]
    console.log(newMusic)
    dispatch(FilterBase(musicBack[0]))
  }
  return (
    <S.WindowFiltered
      className="window-filtered"
      style={
        nameFilter === 'исполнителю'
          ? { left: '450px' }
          : nameFilter === 'году выпуска'
          ? { left: '560px' }
          : nameFilter === 'жанру'
          ? { left: '600px' }
          : { left: '' }
      }
    >
      <S.FilterAuthorList onClick={handleAllTracks}>
        Все треки
      </S.FilterAuthorList>
      {filteredMusic.map((el) => (
        <ItemFilter
          key={el.el}
          author={el}
          image="img/icon/sprite.svg#icon-note"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          filterMusic={filterMusic}
        />
      ))}
    </S.WindowFiltered>
  )
}

export { ListFilter }
