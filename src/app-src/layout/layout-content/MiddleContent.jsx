import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'

function MiddleContent(props) {
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
    <div className="main__centerblock centerblock">
      <Search searchTrack={searchTrack} music={music} />
      <h2 className="centerblock__h2">Треки</h2>
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
    </div>
  )
}

export default MiddleContent
