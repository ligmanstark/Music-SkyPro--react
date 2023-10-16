import * as S from './styles/style'

const ItemFilter = (props) => {
  const { author } = props

  return (
    <div className="">
      <S.FilterAuthorList
        className="track__author-link filter-list"
        href="http://"
      >
        {author}
      </S.FilterAuthorList>
    </div>
  )
}

export { ItemFilter }
