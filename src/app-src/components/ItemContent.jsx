function ItemContent(props) {
  const { id, name, author, album, duration_in_seconds } = props
  const convertTime = (sec) => {
    const second = sec % 60
    const minutes = (sec / 60) % 60
    return Math.trunc(minutes) + ':' + second
  }
  return (
    <div className="playlist__item">
      <div className="playlist__track track" key={id}>
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={props.image}></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {name}{' '}
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={props.tackTimeIcon}></use>
          </svg>
          <span className="track__time-text">
            {convertTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  )
}
export { ItemContent }
