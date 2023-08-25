import { convertTime } from '../function/convertTime'
import * as S from '../styles/style'
function ItemContent(props) {
  const { id, name, author, album, duration_in_seconds } = props

  return (
    <S.PlaylistItem className="playlist__item" key={id}>
      <S.PlaylistTrack className="playlist__track track">
        <S.TrackTittle className="track__title">
          <S.TrackTittleImage className="track__title-image">
            <S.TrackTittleSVG className="track__title-svg" alt="music">
              <use xlinkHref={props.image}></use>
            </S.TrackTittleSVG>
          </S.TrackTittleImage>
          <div className="track__title-text">
            <S.TrackTittleLink className="track__title-link" href="http://">
              {name}{' '}
            </S.TrackTittleLink>
          </div>
        </S.TrackTittle>
        <S.TackAuthor className="track__author">
          <S.TackAuthorLink className="track__author-link" href="http://">
            {author}
          </S.TackAuthorLink>
        </S.TackAuthor>
        <S.TrackAlbum className="track__album">
          <S.TrackAlbumLink className="track__album-link" href="http://">
            {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSVG className="track__time-svg" alt="time">
            <S.Likelee xlinkHref={props.tackTimeIcon}></S.Likelee>
          </S.TrackTimeSVG>
          <S.TrackTimeText className="track__time-text">
            {convertTime(duration_in_seconds)}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
export { ItemContent }
