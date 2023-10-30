import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'
import * as S from '../../components/styles/style'
import {
  useGetAllTracksQuery,
  useGetSectionTracksQuery,
} from '../../../store/service/serviceMusicApi'

const MiddleContentCategory = (props) => {
  const {
    countSection,
    music = [],
    isOpenFilter,
    searchTrack = Function.prototype,
    handleOpenFilter = Function.prototype,
    filteredMusic = [],
    nameFilter,
    lengthFilter,
    url,
    handleSelectSong = Function.prototype,
    toggleLike = Function.prototype,
  } = props

  const { isLoading } = useGetSectionTracksQuery(countSection)

  return (
    <S.MainCenterblock className="main__centerblock ">
      <Search music={music} />
      <S.CenterblockH2 className="centerblock__h2">{url}</S.CenterblockH2>
      <Filter
        handleOpenFilter={handleOpenFilter}
        nameFilter={nameFilter}
        lengthFilter={lengthFilter}
      />
      {isOpenFilter && (
        <ListFilter
          filteredMusic={filteredMusic}
          nameFilter={nameFilter}
          music={music}
        />
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

export { MiddleContentCategory }
