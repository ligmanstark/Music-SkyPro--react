import React, { useState, useEffect } from 'react'
import { ListContent } from './components/ListContent'
import { Filter } from './components/Filter'
import { Search } from './components/Search'
import { getAllTracks } from './function/response'

function MiddleContent() {
  const [music, setMusic] = useState([])

  useEffect(() => {
    getAllTracks().then((data) => {
      setMusic(data.data)
    })
  }, [])

  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <ListContent music={music} />
    </div>
  )
}

export default MiddleContent
