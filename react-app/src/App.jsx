import Games from './components/Games/Games'
import Teams from './components/Teams/teamOverview/Teams'
import Players from './components/Players/PlayerOverview/Players'
import Heroes from './components/Games/Games'
import React from 'react'
import Home from './components/home/Home'
import { useState, useEffect } from 'react'

function App() {
  const [activeContent, setActiveContent] = useState('home')
  const [activePage, setActivePage] = useState('home')
  function handleClick(page) {
    setActiveContent(page)
    setActivePage(page)
  }
  return (
    <div className='w-screen overflow-x-hidden mb-5'>
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col '>
          <div className='w-full navbar bg-base-300 '>
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
            <button
              className='flex-1 px-2 mx-2'
              onClick={() => handleClick('home')}
            >
              <img
                className='w-6 h-6'
                src='https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/bltc8053953f59eb482/5d71a2b5cd4bff10737ca491/favicon-32x32.png?auto=webp'
              />
            </button>
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
            <div className='mb-8'>
              {activePage === 'home' && <Home />}
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
