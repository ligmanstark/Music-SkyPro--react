import { ActiveTrack } from '../../components/ActiveTrack'
import * as S from '../../styles/style'
import prevB from '../../../img/icon/prev.svg'
import nextB from '../../../img/icon/next.svg'
import playB from '../../../img/icon/play.svg'
import repeatB from '../../../img/icon/repeat.svg'
import shuffleB from '../../../img/icon/shuffle.svg'
import volumeB from '../../../img/icon/volume.svg'

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
                <S.PlayerPrevSVG
                  src={prevB}
                  className="player__btn-prev-svg"
                  alt="prev"
                ></S.PlayerPrevSVG>
              </S.PlayerPrev>
              <S.PlayerButtonPlay className="player__btn-play _btn">
                <S.ButtonPlaySVG
                  src={playB}
                  className="player__btn-play-svg"
                  alt="play"
                ></S.ButtonPlaySVG>
              </S.PlayerButtonPlay>
              <S.PlayerButonNext className="player__btn-next">
                <S.PlayerButtonNextSVG
                  src={nextB}
                  className="player__btn-next-svg"
                  alt="next"
                ></S.PlayerButtonNextSVG>
              </S.PlayerButonNext>
              <S.PlayerButtonRepeat className="player__btn-repeat _btn-icon">
                <S.PlayerButtonRepeatSVG
                  src={repeatB}
                  className="player__btn-repeat-svg"
                  alt="repeat"
                ></S.PlayerButtonRepeatSVG>
              </S.PlayerButtonRepeat>
              <S.PlayerButtonShuffle className="player__btn-shuffle _btn-icon">
                <S.PlayerButtonShuffleSVG
                  src={shuffleB}
                  className="player__btn-shuffle-svg"
                  alt="shuffle"
                ></S.PlayerButtonShuffleSVG>
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
                <S.VolumeSVG
                  src={volumeB}
                  className="volume__svg"
                  alt="volume"
                ></S.VolumeSVG>
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