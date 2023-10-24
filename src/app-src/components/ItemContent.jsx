import { convertTime } from '../helpers/convertTime'
import * as S from './styles/style'
import * as A from './styles/animations'
import like from '../../img/icon/like.svg'
import note from '../../img/icon/note.svg'
import like_active from '../../img/icon/like_active.svg'
import dislike_active from '../../img/icon/dislike_active.svg'
import { useSelector } from 'react-redux'

const ItemContent = (props) => {
  const activ = useSelector((state) => state.musicReducer.activeSong)
  const selectSong = useSelector((state) => state.musicReducer.selectSong)
  const userId = Number(useSelector((state) => state.user.id))
  const Page = useSelector((state) => state.musicReducer.currentPage)
  const {
    el,
    toggleLike = Function.prototype,
    id,
    name,
    author,
    album,
    duration_in_seconds,
    handleSelectSong = Function.prototype,
  } = props
  const LikeStatus = () => {
    if (Page === 'Main') {
      if ((el.stared_user ?? []).find((user) => user.id === userId)) {
        return (
          <S.TrackTimeSVG
            src={like_active}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      } else if (!el.stared_user) {
        return (
          <S.TrackTimeSVG
            src={like_active}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      } else {
        return (
          <S.TrackTimeSVG
            src={like}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      }
    } else if (Page === 'Favorites') {
      if ((el.stared_user ?? []).find((user) => user.id === userId)) {
        return (
          <S.TrackTimeSVG
            src={dislike_active}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      } else if (!el.stared_user) {
        return (
          <S.TrackTimeSVG
            src={dislike_active}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      } else {
        return (
          <S.TrackTimeSVG
            src={like}
            className="track__time-svg"
            alt="time"
            onClick={(e) => {
              toggleLike(el)
              e.stopPropagation()
            }}
          ></S.TrackTimeSVG>
        )
      }
    }
  }
  return (
    <S.PlaylistItem
      className="playlist__item"
      key={id}
      onClick={handleSelectSong}
    >
      <S.PlaylistTrack className="playlist__track track">
        <S.TrackTittle className="track__title">
          <S.TrackTittleImage className="track__title-image">
            {activ && selectSong[0][0] && selectSong[0][0].id === id ? (
              <A.animationBubble
                key={id}
                src={note}
                className="track__title-svg"
                alt="music"
              ></A.animationBubble>
            ) : !activ && selectSong[0][0] && selectSong[0][0].id === id ? (
              <A.animationBubbleStop
                key={id}
                src={note}
                className="track__title-svg"
                alt="music"
              ></A.animationBubbleStop>
            ) : (
              <S.TrackTittleSVG
                key={id}
                src={note}
                className="track__title-svg"
                alt="music"
              ></S.TrackTittleSVG>
            )}
          </S.TrackTittleImage>
          <div className="track__title-text">
            <S.TrackTittleLink className="track__title-link">
              {name}
            </S.TrackTittleLink>
          </div>
        </S.TrackTittle>
        <S.TackAuthor className="track__author">
          <S.TackAuthorLink className="track__author-link">
            {author}
          </S.TackAuthorLink>
        </S.TackAuthor>
        <S.TrackAlbum className="track__album">
          <S.TrackAlbumLink className="track__album-link">
            {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <LikeStatus />
          <S.TrackTimeText className="track__time-text">
            {convertTime(duration_in_seconds)}
          </S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}
export { ItemContent }
