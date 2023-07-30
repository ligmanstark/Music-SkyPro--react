import React, { useState } from 'react'
import { Content } from './components/Content'
import { Filter } from './components/Filter'
import { Search } from './components/Search'

function MiddleContent() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter/>
      <Content />
    </div>
  )
}
//MiddleContent

export default MiddleContent
