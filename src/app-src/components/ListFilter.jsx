import { ItemFilter } from './ItemFilter'
import * as S from './styles/style'
const ListFilter = (props) => {
  const { filteredMusic = [], nameFilter } = props
  return (
    <S.WindowFiltered
      className="window-filtered"
      style={
        nameFilter === 'исполнителю'
          ? { left: '450px' }
          : nameFilter === 'году выпуска'
          ? { left: '560px' }
          : nameFilter === 'жанру'
          ? { left: '600px' }
          : { left: '' }
      }
    >
      {filteredMusic.map((el) => (
        <ItemFilter
          key={el.el}
          author={el}
          image="img/icon/sprite.svg#icon-note"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
        />
      ))}
    </S.WindowFiltered>
  )
}

export { ListFilter }
