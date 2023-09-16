import { ActiveTrack } from '../../components/ActiveTrack'
import * as S from '../../styles/style'
const PlayerBar = (props) => {
  const { music = [] } = props
  return (
    <S.Bar className="bar">
      <S.BarContent className="bar__content">
        <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
        <S.BarPlayerBlock className="bar__player-block">
          <S.BarPlayer className="bar__player player">
            <S.PlayerControls className="player__controls">
              <S.PlayerPrev className="player__btn-prev">
                <S.PlayerPrevSVG className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="../img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerPrevSVG>
              </S.PlayerPrev>
              <S.PlayerButtonPlay className="player__btn-play _btn">
                <S.ButtonPlaySVG className="player__btn-play-svg" alt="play">
                  <use xlinkHref="../img/icon/sprite.svg#icon-play"></use>
                </S.ButtonPlaySVG>
              </S.PlayerButtonPlay>
              <S.PlayerButonNext className="player__btn-next">
                <S.PlayerButtonNextSVG
                  className="player__btn-next-svg"
                  alt="next"
                >
                  <use xlinkHref="../img/icon/sprite.svg#icon-next"></use>
                </S.PlayerButtonNextSVG>
              </S.PlayerButonNext>
              <S.PlayerButtonRepeat className="player__btn-repeat _btn-icon">
                <S.PlayerButtonRepeatSVG
                  className="player__btn-repeat-svg"
                  alt="repeat"
                >
                  <use xlinkHref="../img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerButtonRepeatSVG>
              </S.PlayerButtonRepeat>
              <S.PlayerButtonShuffle className="player__btn-shuffle _btn-icon">
                <S.PlayerButtonShuffleSVG
                  className="player__btn-shuffle-svg"
                  alt="shuffle"
                >
                  <use xlinkHref="../img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerButtonShuffleSVG>
              </S.PlayerButtonShuffle>
            </S.PlayerControls>

            {!music.length ? (
              ''
            ) : (
              <ActiveTrack
                key={music[0].id}
                name={music[0].name}
                author={music[0].author}
              />
            )}
          </S.BarPlayer>
          <S.BarVolumeBlock className="bar__volume-block volume">
            <S.VolumeContent className="volume__content">
              <S.VolumeImage className="volume__image">
                <S.VolumeSVG className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSVG>
              </S.VolumeImage>
              <S.VolumeProgress className="volume__progress _btn">
                <S.VolumeProgressLine
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                ></S.VolumeProgressLine>
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export { PlayerBar }
