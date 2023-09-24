import { ListContent } from '../app-src/components/ListContent'
import { Filter } from '../app-src/components/Filter'
import { Search } from '../app-src/components/Search'
import { PreloaderMiddleContent } from '../app-src/components/PreloaderMiddleContent'
import { ListFilter } from '../app-src/components/ListFilter'
import * as S from '../app-src/styles/style'

const CategoryContent = (props) => {
  const {
    music = [],
    isOpenFilter,
    searchTrack = Function.prototype,
    handleOpenFilter = Function.prototype,
    filteredMusic = [],
    nameFilter,
    lengthFilter,
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
        <ListContent music={music} />
      )}
    </S.MainCenterblock>
  )
}

export { CategoryContent }
