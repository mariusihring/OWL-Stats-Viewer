import React, { useState } from 'react'
import './App.css'
import Games from './Components/Games/Games'
import Teams from './Components/Teams/teamOverview/Teams'
import Players from './Components/Players/PlayerOverview/Players.jsx'
function App() {
  const [activeContent, setActiveContent] = useState('games')
  const [activePage, setActivePage] = useState('games')
  function handleClick(page) {
    setActiveContent(page)
    setActivePage(page)
  }
  return (
    <div className='App'>
      <div className='Navigation'>
        <button
          className={activeContent === 'games' ? 'activePage' : 'null'}
          onClick={() => handleClick('games')}
        >
          Games
        </button>
        <button
          className={activeContent === 'teams' ? 'activePage' : 'null'}
          onClick={() => handleClick('teams')}
        >
          Teams
        </button>
        <button
          className={activeContent === 'players' ? 'activePage' : 'null'}
          onClick={() => handleClick('players')}
        >
          Players
        </button>
        <button
          className={activeContent === 'heroes' ? 'activePage' : 'null'}
          onClick={() => handleClick('heroes')}
        >
          Heroes
        </button>
      </div>
      <div className='Content'>
        <div>
          {activePage === 'games' && <Games />}
          {activePage === 'teams' && <Teams />}
          {activePage === 'players' && <Players />}
          {activePage === 'heroes' && <Teams />}
        </div>
      </div>
    </div>
  )
}

export default App
