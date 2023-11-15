import * as S from './styles/style'
import { useDispatch, useSelector } from 'react-redux'
import { unickedFiltredDate } from '../../store/slice/musicSlice'
const ItemFilter = (props) => {
  const { author, filterMusic = Function.prototype } = props
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  console.log(filterMusic)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  console.log(author)
  return (
    <>
      {filterBase &&
      isFilter &&
      filterBase.find((el) => el.author === author || el.genre === author) ? (
        <div className="">
          <S.FilterAuthorList
            className="track__author-link filter-list"
            onClick={filterMusic}
            style={{ color: 'purple' }}
          >
            {author}
          </S.FilterAuthorList>
        </div>
      ) : (
        <div className="">
          <S.FilterAuthorList
            className="track__author-link filter-list"
            onClick={filterMusic}
          >
            {author}
          </S.FilterAuthorList>
        </div>
      )}
    </>
  )
}

export { ItemFilter }
