import Navigation from './layout/layout-content/Navigation'
import MiddleContent from './layout/layout-content/MiddleContent'
import Sidebar from './layout/layout-content/Sidebar'
import React, { useEffect, useState } from 'react'
import { getAllTracks, getTrackById } from './function/response'
import { PlayerBar } from './layout/layout-content/PlayBar'
import { Search } from './components/Search'

function Content() {
  const [music, setMusic] = useState([])


  useEffect(() => {
    getAllTracks().then((data) => {
      setMusic(data.data)
    })
  }, [])

  const searchTrack = (id='all') => {
    getTrackById(id).then((data) => {
      setMusic(data.data)
      console.log(data.data)
    })
  }
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <MiddleContent music={music} searchTrack={searchTrack} />
          <Sidebar />
        </main>
        <PlayerBar music={music} />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export { Content }
