import { useSelector } from 'react-redux'

const QuantitySongsInFilter = (props) => {
  const isOpenedFilter = useSelector(
    (state) => state.musicReducer.isOpenedFilter
  )

  // const filterDate = useSelector((state) => state.musicReducer.filterDate)
  const { lengthFilter, nameFilter } = props
  return (
    <div
      style={
        nameFilter === 'исполнителю'
          ? {
              position: 'absolute',
              left: '574px',
              top: '230px',
              color: 'whitesmoke',
              borderRadius: '60%',
              border: '2px #6b3ebe solid',
              backgroundColor: '#6b3ebe',
              fontSize: '16px',
              width: '22px',
              textAlign: 'center',
            }
          : nameFilter === 'году выпуска'
          ? {
              position: 'absolute',
              left: '730px',
              top: '230px',
              color: 'whitesmoke',
              borderRadius: '60%',
              border: '2px #6b3ebe solid',
              backgroundColor: '#6b3ebe',
              fontSize: '16px',
              width: '22px',
              textAlign: 'center',
            }
          : nameFilter === 'жанру'
          ? {
              position: 'absolute',
              left: '830px',
              top: '230px',
              color: 'whitesmoke',
              borderRadius: '60%',
              border: '2px #6b3ebe solid',
              backgroundColor: '#6b3ebe',
              fontSize: '16px',
              width: '22px',
              textAlign: 'center',
            }
          : { left: '' }
      }
    >
      {isOpenedFilter ? lengthFilter : ''}
    </div>
  )
}

export { QuantitySongsInFilter }
