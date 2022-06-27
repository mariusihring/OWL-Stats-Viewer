import React from 'react'
import './Games.css'

function Games() {
  const [active, setActive] = React.useState('all')
  function handleButtonClick(filter) {
    setActive(filter)
  }
  return (
    <div className='page'>
      <div className='header'>
        <h1>Games</h1>
        <div className='year-buttons'>
          <button
            className={active === 'all' ? 'active' : null}
            onClick={() => handleButtonClick('all')}
          >
            All
          </button>
          <button
            className={active === '2021' ? 'active' : null}
            onClick={() => handleButtonClick('2021')}
          >
            2021
          </button>
          <button
            className={active === '2020' ? 'active' : null}
            onClick={() => handleButtonClick('2020')}
          >
            2020
          </button>
          <button
            className={active === '2019' ? 'active' : null}
            onClick={() => handleButtonClick('2019')}
          >
            2019
          </button>
          <button
            className={active === '2018' ? 'active' : null}
            onClick={() => handleButtonClick('2018')}
          >
            2018
          </button>
        </div>
      </div>
    </div>
  )
}

export default Games
