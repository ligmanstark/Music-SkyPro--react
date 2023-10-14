import { useState, useEffect } from 'react'
import * as S from './styles/style'
import { audioRef } from '../layout/layout-content/PlayBar'
import { convertTime } from '../helpers/convertTime'
import { useDispatch, useSelector } from 'react-redux'
import { autoNext } from '../../store/musicSlice'
const ProgressBar = () => {
  const [currentTime, setCurrentTime] = useState(null)
  const [duration, setDuration] = useState(null)

  const dispatch = useDispatch()
  const timeDuration = (time) => {
    dispatch(autoNext(time))
  }

  useEffect(() => {
    setDuration(audioRef.current.duration)
  })

  const handleTime = () => {
    audioRef.current.currentTime = currentTime
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime)
      if (currentTime !== null) {
        timeDuration({ currentTime, duration })
      }
      console.log(currentTime)
    }, 100)
    return () => clearInterval(timeId)
  }, [currentTime])

  return (
    <>
      <span>
        {convertTime(currentTime)} / {convertTime(duration)}
      </span>

      <S.StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        onClick={handleTime}
        $color="#4db6ac "
      />
    </>
  )
}

export { ProgressBar }
