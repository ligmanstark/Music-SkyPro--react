import Navigation from './layout/layout-content/Navigation'
import MiddleContent from './layout/layout-content/MiddleContent'
import Sidebar from './layout/layout-content/Sidebar'
import React, { useEffect, useState } from 'react'
import { getAllTracks, getTrackById } from './function/response'
import { PlayerBar } from './layout/layout-content/PlayBar'
import { PreloaderSideBar } from './components/PreloaderSideBar'

function Content() {
  const [music, setMusic] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [nameFilter, setNameFilter] = useState('')
  const [filteredMusic, setFilteredMusic] = useState([])

  const handleOpenFilter = (event) => {
    setOpenFilter(true)
    const value = event.target.innerHTML
    if (value === 'исполнителю') {
      setFilteredMusic([...new Set(music.map((e) => e.author))])
      setNameFilter('исполнителю')
    } else if (value === 'году выпуска') {
      const arr = [...new Set(music.map((e) => e.release_date))]
        .filter((word) => word !== null)
        .map((e) => e.slice(0, 4))
      // arr.filter((word) => word !== null).map(e=>e.slice(0,4))
      setFilteredMusic(arr)
      setNameFilter('году выпуска')
    } else if (value === 'жанру') {
      setFilteredMusic([...new Set(music.map((e) => e.genre))])
      setNameFilter('жанру')
    }
    if (nameFilter === value) {
      setOpenFilter(false)
      setNameFilter('')
    }
  }

  useEffect(() => {
    getAllTracks().then((data) => {
      setMusic(data.data)
      setFilteredMusic([...new Set(data.data.map((e) => e.author))])
    })
  }, [])

  const searchTrack = (id) => {
    getTrackById(id).then((data) => {
      const flat = [data.data].flat(1)
      setMusic(flat)
    })
  }

  const handleChangeMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation handleChangeMenu={handleChangeMenu} isOpen={isOpen} />
          <MiddleContent
            music={music}
            searchTrack={searchTrack}
            handleOpenFilter={handleOpenFilter}
            isOpenFilter={isOpenFilter}
            filteredMusic={filteredMusic}
            nameFilter={nameFilter}
          />
          {!music.length ? <PreloaderSideBar /> : <Sidebar />}
        </main>
        <PlayerBar music={music} />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export { Content }
