import { ItemContent } from './ItemContent'
import * as S from './styles/style'
import watch from '../../img/icon/watch.svg'
import { useGetAllTracksQuery } from '../../store/service/serviceMusicApi'
const ListContent = (props) => {
  const { data = [] } = useGetAllTracksQuery()
  const { handleSelectSong = Function.prototype, music = [] } = props
  console.log(music);
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
          <S.PlaylistTittleSVG
            src={watch}
            className="playlist-title__svg"
            alt="time"
          ></S.PlaylistTittleSVG>
        </S.PlaylistTittleFour>
      </S.ContentTittle>
      <S.ContentPlaylist className="content__playlist playlist">
        {music.map((el) => (
          <ItemContent
            key={el.id}
            {...el}
            handleSelectSong={handleSelectSong}
          />
        ))}
      </S.ContentPlaylist>
    </S.CenterblockContent>
  )
}
export { ListContent }
