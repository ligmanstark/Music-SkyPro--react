import { ItemContent } from './ItemContent'

function ListContent(props) {
  const { music = [] } = props
  console.log(music)
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {music.map((el) => (
          <ItemContent
            key={el.id}
            {...el}
            image="img/icon/sprite.svg#icon-note"
            tackTimeIcon="img/icon/sprite.svg#icon-like"
          />
        ))}
      </div>
    </div>
  )
}
export { ListContent }
