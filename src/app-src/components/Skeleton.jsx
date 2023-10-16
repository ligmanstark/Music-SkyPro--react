import * as S from './styles/style'
import note from '../../img/icon/watch.svg'

const Skeleton = (props) => {
  return (
    <S.PlaylistItem className="playlist__item">
      <S.PlaylistTrack className="playlist__track track">
        <S.TrackTittle className="track__title">
          <S.TrackTittleImage className="track__title-image">
            <S.TrackTittleSVG
              className="track__title-svg"
              alt="music"
              src={note}
            ></S.TrackTittleSVG>
          </S.TrackTittleImage>
          <S.Preloader className="preloader">
            <S.TrackTitleLinkPreloader
              className="track__title-link preloader"
              href="http://"
            >
              {props.trackName}{' '}
              <S.TrackTittleSpanPreloader className="track__title-span">
                {props.subName}
              </S.TrackTittleSpanPreloader>
            </S.TrackTitleLinkPreloader>
          </S.Preloader>
        </S.TrackTittle>
        <S.Preloader className="preloader">
          <S.TrackAuthorLinkPreloader
            className="track__author-link preloader"
            href="http://"
          >
            {props.autorName}
          </S.TrackAuthorLinkPreloader>
        </S.Preloader>
        <S.Preloader className="preloader">
          <S.TrackAlbumLinkPreloader
            className="track__album-link preloader"
            href="http://"
          >
            {props.albumName}
          </S.TrackAlbumLinkPreloader>
        </S.Preloader>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export { Skeleton }
