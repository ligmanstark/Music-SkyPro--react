import { ItemFilter } from './ItemFilter'

const ListFilter = (props) => {
  const { music = [], filteredMusic = [], nameFilter } = props
  return (
    <div
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
    </div>
  )
}

export { ListFilter }
