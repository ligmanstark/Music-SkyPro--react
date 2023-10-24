import { ActiveTrack } from '../../components/ActiveTrack'
import { useState, useRef, useEffect, useContext } from 'react'
import { ProgressBar } from '../../components/ProgressBar'
import { VolumeBar } from '../../components/VolumeBar'
import * as S from '../../components/styles/style'
import { useSelector, useDispatch } from 'react-redux'
import { AppContext } from '../../../context'
import { audioRef } from '../../../pages/PageLayout'
import { autoNext } from '../../../store/slice/musicSlice'

import {
  shuffle,
  nextSong,
  prevSong,
  changeShuffle,
  active,
  takeCount,
  takeStartCount,
  prevTakeStartCount,
  prevTakeCount,
} from '../../../store/slice/musicSlice'
import prevB from '../../../img/icon/prev.svg'
import nextB from '../../../img/icon/next.svg'
import playB from '../../../img/icon/play.svg'
import pauseB from '../../../img/icon/pause.svg'
import loopB from '../../../img/icon/loop.svg'
import repeatB from '../../../img/icon/repeat.svg'
import shuffleB from '../../../img/icon/shuffle.svg'
import volumeB from '../../../img/icon/volume.svg'
import activeshuffleB from '../../../img/icon/activSfuh.svg'

const PlayerBar = (props) => {
  const { toggleLike = Function.prototype } = props
  const { isPlay } = props
  const music = useSelector((state) => state.musicReducer.music)
  const FavSongs = useSelector((state) => state.musicReducer.playlistFavorite)

  const selectSong = useSelector((state) => state.musicReducer.selectSong)
  const currentPage = useSelector((state) => state.musicReducer.currentPage)

  const currentPlaylist = useSelector(
    (state) => state.musicReducer.currentPlaylist
  )

  const [isPlaying, setIsPlaying] = useState(isPlay)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [count, setCount] = useState(1)
  const [startCount, setStartCount] = useState(0)

  const [currentTime, setCurrentTime] = useState(null)
  const [duration, setDuration] = useState(null)

  const dispatch = useDispatch()

  const startPrevCounter = () => {
    if (startCount > 0) {
      setStartCount((count) => count - 1)
    }
  }

  const prevCounter = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  const startNextCounter = () => {
    if (startCount < 29) {
      setStartCount((count) => count + 1)
    }
  }

  const startCounter = () => {
    if (count < 29) {
      setCount((count) => count + 1)
    }
  }

  const prevStartTakeCount = () => {
    dispatch(prevTakeStartCount(startCount))
  }

  const prevTakeCounter = () => {
    dispatch(prevTakeCount(count))
  }

  const nextStartTakeCount = () => {
    dispatch(takeStartCount(startCount))
  }

  const nextTakeCounter = () => {
    dispatch(takeCount(count))
  }
  const shuffleMusic = () => {
    setIsShuffle((prev) => !prev)
    dispatch(shuffle(currentPlaylist))
  }

  const isActiveMusic = (status) => {
    dispatch(active(status))
  }

  ///////////////////////продолжительность трека
  const timeDuration = (time) => {
    dispatch(autoNext(time))
  }

  const handleTime = () => {
    audioRef.current.currentTime = currentTime
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      setDuration(audioRef.current.duration)

      setCurrentTime(audioRef.current.currentTime)
      if (currentTime !== null && currentTime !== NaN && duration !== NaN) {
        timeDuration({ currentTime, duration })
      }
    }, 100)
    return () => clearInterval(timeId)
  }, [currentTime, duration])

  const handleNextSong = () => {
    if (currentPage === 'Main') {
      dispatch(nextSong({ music, selectSong }))
    } else if (currentPage === 'Favorites') {
      dispatch(nextSong({ FavSongs, selectSong }))
    }
    audioRef.current.play()
    setIsPlaying((prev) => !prev)
    isActiveMusic(isPlaying)
    startCounter()
    nextTakeCounter()
    startNextCounter()
    nextStartTakeCount()
  }

  const handlePrevSong = () => {
    if (currentPage === 'Main') {
      dispatch(prevSong({ music, selectSong }))
    } else if (currentPage === 'Favorites') {
      dispatch(prevSong({ FavSongs, selectSong }))
    }
    audioRef.current.play()
    setIsPlaying(true)
    isActiveMusic(isPlaying)
    prevCounter()
    prevTakeCounter()
    startPrevCounter()
    prevStartTakeCount()
  }

  useEffect(() => {
    dispatch(changeShuffle(isShuffle))
  }, [isShuffle])

  const playingButton = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying((prev) => !prev)
      isActiveMusic(isPlaying)
      localStorage.setItem('IsPlaying', Boolean(false))
    } else {
      audioRef.current.play()
      setIsPlaying((prev) => !prev)
      isActiveMusic(isPlaying)
      localStorage.setItem('IsPlaying', Boolean(true))
    }
  }

  const handleLoop = () => {
    setIsLooping((prev) => !prev)
  }

  useEffect(() => {
    audioRef.current.play()
    setIsPlaying(true)
    isActiveMusic(isPlaying)
    return () => {
      setIsPlaying(false)
      isActiveMusic(false)
    }
  }, [selectSong])

  useEffect(() => {
    isActiveMusic(isPlaying)
  }, [audioRef.current])

  return (
    <S.Bar className="bar">
      <S.AudioStyle
        controls
        ref={audioRef}
        src={selectSong[0][0] ? selectSong[0][0].track_file : '00:00'}
        loop={isLooping ? true : false}
      ></S.AudioStyle>
      <S.BarContent className="bar__content">
        <ProgressBar
          duration={duration}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          handleTime={handleTime}
          setDuration={setDuration}
        />
        <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
        <S.BarPlayerBlock className="bar__player-block">
          <S.BarPlayer className="bar__player player">
            <S.PlayerControls className="player__controls">
              <S.PlayerPrev className="player__btn-prev">
                <S.PlayerPrevSVG
                  src={prevB}
                  className="player__btn-prev-svg"
                  alt="prev"
                  onClick={handlePrevSong}
                ></S.PlayerPrevSVG>
              </S.PlayerPrev>
              <S.PlayerButtonPlay className="player__btn-play _btn">
                {!isPlaying ? (
                  <S.ButtonPlaySVG
                    src={playB}
                    className="player__btn-play-svg"
                    alt="play"
                    onClick={playingButton}
                  ></S.ButtonPlaySVG>
                ) : (
                  <S.ButtonPauseSVG
                    src={pauseB}
                    className="player__btn-play-svg"
                    alt="play"
                    onClick={playingButton}
                  ></S.ButtonPauseSVG>
                )}
              </S.PlayerButtonPlay>
              <S.PlayerButonNext className="player__btn-next">
                <S.PlayerButtonNextSVG
                  src={nextB}
                  className="player__btn-next-svg"
                  alt="next"
                  onClick={handleNextSong}
                ></S.PlayerButtonNextSVG>
              </S.PlayerButonNext>
              <S.PlayerButtonRepeat className="player__btn-repeat _btn-icon">
                {!isLooping ? (
                  <S.PlayerButtonRepeatSVG
                    src={repeatB}
                    className="player__btn-repeat-svg"
                    alt="repeat"
                    onClick={handleLoop}
                  ></S.PlayerButtonRepeatSVG>
                ) : (
                  <S.PlayerButtonRepeatSVG
                    src={loopB}
                    className="player__btn-repeat-svg"
                    alt="repeat"
                    onClick={handleLoop}
                  ></S.PlayerButtonRepeatSVG>
                )}
              </S.PlayerButtonRepeat>
              <S.PlayerButtonShuffle className="player__btn-shuffle _btn-icon">
                {isShuffle ? (
                  <S.PlayerButtonShuffleSVG
                    src={activeshuffleB}
                    className="player__btn-shuffle-svg"
                    alt="shuffle"
                    onClick={shuffleMusic}
                  ></S.PlayerButtonShuffleSVG>
                ) : (
                  <S.PlayerButtonShuffleSVG
                    src={shuffleB}
                    className="player__btn-shuffle-svg"
                    alt="shuffle"
                    onClick={shuffleMusic}
                  ></S.PlayerButtonShuffleSVG>
                )}
              </S.PlayerButtonShuffle>
            </S.PlayerControls>

            {!selectSong[0].length ? (
              ''
            ) : (
              <ActiveTrack toggleLike={toggleLike} />
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
                <S.VolumeProgressLine>
                  <VolumeBar />
                </S.VolumeProgressLine>
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export { PlayerBar }
