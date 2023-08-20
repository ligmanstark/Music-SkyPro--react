const QuantitySongsInFilter = (props) => {
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
      {lengthFilter}
    </div>
  )
}

export { QuantitySongsInFilter }
