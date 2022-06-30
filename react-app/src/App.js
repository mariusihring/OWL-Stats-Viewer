import Games from './components/Games/Games'
import Teams from './components/Teams/teamOverview/Teams'
import Players from './components/Games/Games'
import Heroes from './components/Games/Games'
import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [activeContent, setActiveContent] = useState('games')
  const [activePage, setActivePage] = useState('games')
  function handleClick(page) {
    setActiveContent(page)
    setActivePage(page)
  }
  return (
    <div className='w-screen overflow-x-hidden'>
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          <div className='w-full navbar bg-base-300'>
            <div className='flex-none lg:hidden'>
              <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-6 h-6 stroke-current'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
            <div className='flex-1 px-2 mx-2'>Overwatch League Stats</div>
            <div className='flex-none hidden lg:block'>
              <ul className='menu menu-horizontal'>
                <li>
                  <button
                    className={
                      activeContent === 'games'
                        ? 'btn-primary rounded text-black'
                        : ''
                    }
                    onClick={() => handleClick('games')}
                  >
                    Games
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeContent === 'teams'
                        ? 'btn-primary rounded text-black'
                        : ''
                    }
                    onClick={() => handleClick('teams')}
                  >
                    Teams
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeContent === 'players'
                        ? 'btn-primary rounded text-black'
                        : ''
                    }
                    onClick={() => handleClick('players')}
                  >
                    Players
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeContent === 'heroes'
                        ? 'btn-primary rounded text-black'
                        : ''
                    }
                    onClick={() => handleClick('heroes')}
                  >
                    Heroes
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div>
              {activePage === 'games' && <Games />}
              {activePage === 'teams' && <Teams />}
              {activePage === 'players' && <Players />}
              {activePage === 'heroes' && <Heroes />}
            </div>
          </div>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-3' class='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100'>
            <li>
              <button onClick={() => handleClick('games')}>Games</button>
            </li>
            <li>
              <button onClick={() => handleClick('teams')}>Teams</button>
            </li>
            <li>
              <button onClick={() => handleClick('players')}>Players</button>
            </li>
            <li>
              <button onClick={() => handleClick('heroes')}>Heroes</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
