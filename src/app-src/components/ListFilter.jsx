import { ItemFilter } from './ItemFilter'

const ListFilter = (props) => {
  const { music = [], filteredMusic = [], nameFilter } = props
  return (
    <div
      className="window-filtered"
      style={
        nameFilter === 'исполнителю'
          ? { left: '250px' }
          : nameFilter === 'году выпуска'
          ? { left: '400px' }
          : nameFilter === 'жанру'
          ? { left: '670px' }
          : console.warn('Ошибка!')
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
