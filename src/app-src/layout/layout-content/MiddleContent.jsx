import { ListContent } from '../../components/ListContent'
import { Filter } from '../../components/Filter'
import { Search } from '../../components/Search'

import { Preloader } from '../../components/Preloader'

function MiddleContent(props) {
  const { music = [], searchTrack = Function.prototype } = props
  console.log(music);

  return (
    <div className="main__centerblock centerblock">
      <Search searchTrack={searchTrack} music={music} />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      {!music.length ? <Preloader /> : <ListContent music={music} />}
    </div>
  )
}

export default MiddleContent
