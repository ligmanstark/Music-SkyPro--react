import * as S from './styles/style'
import like from '../../img/icon/like.svg'
import dislike from '../../img/icon/dislike.svg'
import note from '../../img/icon/note.svg'
import { useSelector } from 'react-redux'
const ActiveTrack = () => {
  const selectSong = useSelector((state) => state.musicReducer.selectSong)
  console.log(selectSong)
  const { id, name, author } = selectSong[0][0]
  return (
    <S.PlayerTrackPlay className="player__track-play track-play" key={id}>
      <S.TrackPlayContain className="track-play__contain">
        <S.TrackPlayImage className="track-play__image">
          <S.TrackPlaySVG
            src={note}
            className="track-play__svg"
            alt="music"
          ></S.TrackPlaySVG>
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
          <S.TrackPlayLikeSVG
            src={like}
            className="track-play__like-svg"
            alt="like"
          ></S.TrackPlayLikeSVG>
        </S.TrackPlayLikeAndDis>
        <S.TrackPlayLikeAndDis className="track-play__dislike _btn-icon">
          <S.TrackPlayDislikeSVG
            src={dislike}
            className="track-play__dislike-svg"
            alt="dislike"
          ></S.TrackPlayDislikeSVG>
        </S.TrackPlayLikeAndDis>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}

export { ActiveTrack }
