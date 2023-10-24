import { ItemContent } from './ItemContent'
import { useNavigate } from 'react-router-dom'
import * as S from './styles/style'
import watch from '../../img/icon/watch.svg'
import { useGetFavTracksQuery } from '../../store/service/serviceMusicApi'
const MyPlaylistContent = (props) => {
  const navigate = useNavigate()
  const { data = [], isLoading, isError } = useGetFavTracksQuery()
  const { handleSelectSong = Function.prototype, music = [] } = props
  console.log(music)
  if (isError) {
    console.log(isError, '401')

    setTimeout(() => {
      localStorage.setItem('user', '')
      localStorage.setItem('token', '')
      localStorage.setItem('email', '')
      localStorage.setItem('refreshToken', '')
      navigate('/login', { replace: true })
    }, 500)
  }
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
        {music.length && music !== undefined
          ? music.map((el) => (
              <ItemContent
                key={el.id}
                {...el}
                handleSelectSong={handleSelectSong}
              />
            ))
          : 'Добавьте ваши любимые треки в избранное !'}
      </S.ContentPlaylist>
    </S.CenterblockContent>
  )
}
export { MyPlaylistContent }
