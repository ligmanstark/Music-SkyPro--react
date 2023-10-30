import * as S from './styles/style'

const ItemFilter = (props) => {
  const { author, filterMusic = Function.prototype } = props

  return (
    <div className="">
      <S.FilterAuthorList
        className="track__author-link filter-list"
        onClick={filterMusic}
      >
        {author}
      </S.FilterAuthorList>
    </div>
  )
}

export { ItemFilter }
