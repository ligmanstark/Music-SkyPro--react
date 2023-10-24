import * as S from './styles/style'
import { convertTime } from '../helpers/convertTime'
const ProgressBar = (props) => {
  const {
    duration,
    currentTime,
    setCurrentTime = Function.prototype,
    handleTime = Function.prototype,
  } = props

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
