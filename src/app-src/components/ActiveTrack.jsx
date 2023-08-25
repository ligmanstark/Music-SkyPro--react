import * as S from '../styles/style'
const ActiveTrack = (props) => {
  const { id, name, author } = props
  return (
    <S.PlayerTrackPlay className="player__track-play track-play" key={id}>
      <S.TrackPlayContain className="track-play__contain">
        <S.TrackPlayImage className="track-play__image">
          <S.TrackPlaySVG className="track-play__svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackPlaySVG>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor className="track-play__author">
          <S.TrackPlayAuthorLink
            className="track-play__author-link"
            href="http://"
          >
            {name}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum className="track-play__album">
          <S.TrackPlayAlbumLink
            className="track-play__album-link"
            href="http://"
          >
            {author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>

      <S.TrackPlayLikeDis className="track-play__like-dis">
        <S.TrackPlayLikeAndDis className="track-play__like _btn-icon">
          <S.TrackPlayLikeSVG className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackPlayLikeSVG>
        </S.TrackPlayLikeAndDis>
        <S.TrackPlayLikeAndDis className="track-play__dislike _btn-icon">
          <S.TrackPlayDislikeSVG
            className="track-play__dislike-svg"
            alt="dislike"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </S.TrackPlayDislikeSVG>
        </S.TrackPlayLikeAndDis>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}

export { ActiveTrack }
