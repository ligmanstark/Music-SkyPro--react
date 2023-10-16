import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'
import * as S from '../../components/styles/style'

const MiddleContent = (props) => {
  const {
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
      <Search searchTrack={searchTrack} music={music} />
      <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
      <Filter
        music={music}
        handleOpenFilter={handleOpenFilter}
        nameFilter={nameFilter}
        lengthFilter={lengthFilter}
      />
      {isOpenFilter && (
        <ListFilter
          music={music}
          filteredMusic={filteredMusic}
          nameFilter={nameFilter}
        />
      )}
      {!music.length ? (
        <PreloaderMiddleContent />
      ) : (
        <ListContent music={music} handleSelectSong={handleSelectSong} />
      )}
    </S.MainCenterblock>
  )
}

export { MiddleContent }
