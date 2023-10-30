import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterBase, prevSong } from '../../store/slice/musicSlice'
import { useGetTrackByIdMutation } from '../../store/service/serviceMusicApi'
import { searchID } from '../helpers/searchID'
const ListFilter = (props) => {
  const { filteredMusic = [], nameFilter, music = [] } = props

  const [filterLand, SetFilterLand] = useState()
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const dispatch = useDispatch()
  const [setFilter, {}] = useGetTrackByIdMutation()

  const filterMusic = (event) => {
    const value = event.target.innerHTML
    SetFilterLand(value)
    console.log(value)
    if (filterLand !== '') {
      if (nameFilter === 'исполнителю') {
        const arr = music.filter((el) => el.author === value)
        console.log(arr)
        dispatch(FilterBase(arr))
      } else if (nameFilter === 'году выпуска') {
        let arr = music.find((el) => el.release_date === value)
        console.log(arr)
        dispatch(FilterBase(arr))
      } else if (nameFilter === 'жанру') {
        const arr = music.filter((el) => el.genre === value)
        console.log(arr)
        dispatch(FilterBase(arr))
      }
    }
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
