import * as S from './styles/style'
import { useDispatch, useSelector } from 'react-redux'
import { unickedFiltredDate } from '../../store/slice/musicSlice'
const ItemFilter = (props) => {
  const { author, filterMusic = Function.prototype, filteredMusic } = props
  const isFilter = useSelector((state) => state.musicReducer.isFilter)

  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  return (
    <>
      {filterBase &&
      isFilter &&
      filterBase.find((el) => el.author === author) ? (
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
