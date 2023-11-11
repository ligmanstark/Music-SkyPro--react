import { ItemContent } from './ItemContent'
import * as S from './styles/style'
import watch from '../../img/icon/watch.svg'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const ListContent = (props) => {
  const isFilter = useSelector((state) => state.musicReducer.isFilter)
  const filterBase = useSelector((state) => state.musicReducer.filterDate)
  const isSearch = useSelector((state) => state.musicReducer.isSearch)
  const searchBase = useSelector((state) => state.musicReducer.search)

  const {
    handleSelectSong = Function.prototype,
    music = [],
    toggleLike = Function.prototype,
  } = props
  console.log(music)
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
        {!isFilter && music.length
          ? music.map((el) => (
              <ItemContent
                el={el}
                key={el.id}
                {...el}
                handleSelectSong={handleSelectSong}
                toggleLike={toggleLike}
              />
            ))
          : filterBase.length && isFilter && !isSearch
          ? filterBase.map((el) => (
              <ItemContent
                el={el}
                key={el.id}
                {...el}
                handleSelectSong={handleSelectSong}
                toggleLike={toggleLike}
              />
            ))
          : isSearch
          ? music.map((el) => (
              <ItemContent
                el={el}
                key={el.id}
                {...el}
                handleSelectSong={handleSelectSong}
                toggleLike={toggleLike}
              />
            ))
          : 'упс'}
      </S.ContentPlaylist>
    </S.CenterblockContent>
  )
}
export { ListContent }
