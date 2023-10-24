import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'
import * as S from '../../components/styles/style'
import { useGetAllTracksQuery } from '../../../store/service/serviceMusicApi'

const MiddleContentCategory = (props) => {
  const { isLoading } = useGetAllTracksQuery()

  const {
    music = [],
    isOpenFilter,
    searchTrack = Function.prototype,
    handleOpenFilter = Function.prototype,
    filteredMusic = [],
    nameFilter,
    lengthFilter,
    url,
    handleSelectSong = Function.prototype,
  } = props

  return (
    <S.MainCenterblock className="main__centerblock ">
      <Search searchTrack={searchTrack} />
      <S.CenterblockH2 className="centerblock__h2">{url}</S.CenterblockH2>
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
        <ListContent handleSelectSong={handleSelectSong} music={music} />
      )}
    </S.MainCenterblock>
  )
}

export { MiddleContentCategory }
