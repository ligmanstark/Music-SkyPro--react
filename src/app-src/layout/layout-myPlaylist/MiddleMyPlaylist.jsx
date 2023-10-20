import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'
import * as S from '../../components/styles/style'
import { useGetAllTracksQuery } from '../../../store/service/serviceMusicApi'
const MiddleContentMyPlaylist = (props) => {
  const { isLoading } = useGetAllTracksQuery()

  const {
    toggleLike = Function.prototype,
    music = [],
    isOpenFilter,
    searchTrack = Function.prototype,
    handleOpenFilter = Function.prototype,
    filteredMusic = [],
    nameFilter,
    lengthFilter,
    handleSelectSong = Function.prototype,
  } = props

  return (
    <S.MainCenterblock className="main__centerblock ">
      <Search searchTrack={searchTrack} />
      <S.CenterblockH2 className="centerblock__h2">
        Мой плейлист
      </S.CenterblockH2>
      <Filter
        handleOpenFilter={handleOpenFilter}
        nameFilter={nameFilter}
        lengthFilter={lengthFilter}
      />
      {isOpenFilter && (
        <ListFilter filteredMusic={filteredMusic} nameFilter={nameFilter} />
      )}
      {isLoading ? (
        <PreloaderMiddleContent />
      ) : (
        <ListContent
          handleSelectSong={handleSelectSong}
          music={music}
          toggleLike={toggleLike}
        />
      )}
    </S.MainCenterblock>
  )
}

export { MiddleContentMyPlaylist }
