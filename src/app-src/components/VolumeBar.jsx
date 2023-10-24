import * as S from './styles/style'
import { audioRef } from '../../pages/PageLayout'
import { useState, useEffect } from 'react'

const VolumeBar = () => {
  const [volume, setVolume] = useState(null)

  useEffect(() => {
    setVolume(audioRef.current.volume)
  }, [])

  const handleVolume = () => {
    audioRef.current.volume = volume
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      setVolume(audioRef.current.volume)
    }, 100000000000)
    return () => clearInterval(timeId)
  }, [volume])
  return (
    <>
      <S.StyledProgressInput
        type="range"
        min={0}
        max={1}
        value={volume}
        step={0.001}
        onChange={(event) => setVolume(event.target.value)}
        onClick={handleVolume}
        $color="#4db6ac "
      />
    </>
  )
}

export { VolumeBar }
