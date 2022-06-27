import React, { useState } from 'react'
import './App.css'
import Teams from './Components/Teams/Teams'
function App() {
  const [activePage, setActivePage] = useState('teams')
  function handleClick(page) {
    setActivePage(page)
  }
  return (
    <div className='App'>
      <div className='Navigation'>
        <button
          className={activePage == 'games' ? 'activePage' : 'null'}
          onClick={() => handleClick('games')}
        >
          Games
        </button>
        <button
          className={activePage == 'teams' ? 'activePage' : 'null'}
          onClick={() => handleClick('teams')}
        >
          Teams
        </button>
        <button
          className={activePage == 'players' ? 'activePage' : 'null'}
          onClick={() => handleClick('players')}
        >
          Players
        </button>
        <button
          className={activePage == 'heroes' ? 'activePage' : 'null'}
          onClick={() => handleClick('heroes')}
        >
          Heroes
        </button>
      </div>
      <div className='Content'>
        <div>
          <Teams />
        </div>
      </div>
    </div>
  )
}

export default App
