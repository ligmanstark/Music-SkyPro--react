import { ItemContent } from './ItemContent'
import * as S from '../styles/style'
import iconMusic from '../../img/icon/sprite.svg#icon-watch'
// src/img/icon/sprite.svg
function ListContent(props) {
  const { music = [] } = props
  return (
    <S.CenterblockContent className="centerblock__content">
      <S.ContentTittle className="content__title playlist-title">
        <S.PlaylistTittleOne className="playlist-title__col col01">
          Трек
        </S.PlaylistTittleOne>
        <S.PlaylistTittleTwo className="playlist-title__col col02">
          ИСПОЛНИТЕЛЬ
        </S.PlaylistTittleTwo>
        <S.PlaylistTittleThree className="playlist-title__col col03">
          АЛЬБОМ
        </S.PlaylistTittleThree>
        <S.PlaylistTittleFour className="playlist-title__col col04">
          <S.PlaylistTittleSVG className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </S.PlaylistTittleSVG>
          <S.PlaylistTittleSVG src={iconMusic} className="playlist-title__svg" alt="time">
          </S.PlaylistTittleSVG>
        </S.PlaylistTittleFour>
      </S.ContentTittle>
      <S.ContentPlaylist className="content__playlist playlist">
        {music.map((el) => (
          <ItemContent
            key={el.id}
            {...el}
            image="img/icon/sprite.svg#icon-note"
            tackTimeIcon="img/icon/sprite.svg#icon-like"
          />
        ))}
      </S.ContentPlaylist>
    </S.CenterblockContent>
  )
}
export { ListContent }
