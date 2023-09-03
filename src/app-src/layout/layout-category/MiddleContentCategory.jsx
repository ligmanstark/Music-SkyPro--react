import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'
import { PreloaderMiddleContent } from '../../components/PreloaderMiddleContent'
import { ListFilter } from '../../components/ListFilter'
import * as S from '../../styles/style'

function MiddleContentCategory(props) {
  const {
    music = [],
    isOpenFilter,
    searchTrack = Function.prototype,
    handleOpenFilter = Function.prototype,
    filteredMusic = [],
    nameFilter,
    lengthFilter,
    url
  } = props

  console.log(url);
   


  return (
    <S.MainCenterblock className="main__centerblock ">
      <Search searchTrack={searchTrack} music={music} />
      <S.CenterblockH2 className="centerblock__h2">{url}</S.CenterblockH2>
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

export default MiddleContentCategory
