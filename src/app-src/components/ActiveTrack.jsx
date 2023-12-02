import { useEffect } from 'react'
import * as S from './styles/style'
import like from '../../img/icon/like.svg'
import dislike from '../../img/icon/dislike.svg'
import note from '../../img/icon/note.svg'
import like_active from '../../img/icon/like_active.svg'
import dislike_active from '../../img/icon/dislike_active.svg'

import { useSelector } from 'react-redux'
import {
  useSetUnlikeMutation,
  useSetLikeMutation,
} from '../../store/service/serviceMusicApi'
const ActiveTrack = (props) => {
  const [setUnlike, {}] = useSetUnlikeMutation()
  const [setLike, {}] = useSetLikeMutation()

  const selectSong = useSelector((state) => state.musicReducer.selectSong)
  const userId = Number(useSelector((state) => state.user.id))
  const Page = useSelector((state) => state.musicReducer.currentPage)
  const { id, name, author } = selectSong[0][0]

  const logout = () => {
    dispatch(userLogout())
    localStorage.setItem('user', '')
    localStorage.removeItem('token')
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const toggleUnlike = (track) => {
    console.log('unlike')

    setUnlike(track)
      .unwrap()
      .catch((error) => {
        console.log(error)
        navigate('/login')
        logout()
      })
  }
  const toggleLike = (track) => {
    console.log('like')

    setLike(track)
      .unwrap()
      .catch((error) => {
        console.log(error)
        navigate('/login')
        logout()
      })
  }

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
          <S.TrackPlayDislikeSVG
            src={dislike_active}
            className="track-play__dislike-svg"
            alt="like"
            onClick={(e) => {
              toggleUnlike(selectSong[0][0])
              e.stopPropagation()
            }}
          ></S.TrackPlayDislikeSVG>
        </S.TrackPlayLikeAndDis>
        <S.TrackPlayLikeAndDis className="track-play__dislike _btn-icon">
          <S.TrackPlayDislikeSVG
            src={like}
            className="track-play__dislike-svg"
            alt="like"
            onClick={(e) => {
              toggleLike(selectSong[0][0])
              e.stopPropagation()
            }}
          ></S.TrackPlayDislikeSVG>
        </S.TrackPlayLikeAndDis>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}

export { ActiveTrack }
