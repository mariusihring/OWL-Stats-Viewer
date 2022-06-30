import React, { useState, useEffect } from 'react'

import GameCard from './Gamecard/Gamecard'

function Games() {
  const [active, setActive] = React.useState('all')
  function handleButtonClick(e) {
    setActive(e)
    setFilter(e)
  }
  const [games, setGames] = useState([])
  const [teams, setTeams] = useState([])
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    fetch('http://127.0.0.1:1337/getAllTeams', {})
      .then(async (response) => response.json())
      .then(async (response) => {
        setTeams(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  useEffect(() => {
    if (filter === 'all') {
      fetch('http://127.0.0.1:1337/getAllGames', {})
        .then((response) => response.json())
        .then((response) => {
          setGames(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (
      (filter === '2021') |
      (filter === '2020') |
      (filter === '2019') |
      (filter === '2018')
    ) {
      fetch(`http://127.0.0.1:1337/getGames/${filter}`, {})
        .then(async (response) => response.json())
        .then(async (response) => {
          setGames(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [filter])
  return (
    <div className='page'>
      <div className='text-center p-5'>
        <button
          className={
            'btn-md  rounded-xl ' + (filter === 'all' ? 'btn-primary ring' : '')
          }
          onClick={() => handleButtonClick('all')}
        >
          All
        </button>

        <button
          className={
            'btn-md  rounded-xl ' +
            (filter === '2021' ? 'btn-primary ring' : '')
          }
          onClick={() => handleButtonClick('2021')}
        >
          2021
        </button>
        <button
          className={
            'btn-md  rounded-xl ' +
            (filter === '2020' ? 'btn-primary ring' : '')
          }
          onClick={() => handleButtonClick('2020')}
        >
          2020
        </button>
        <button
          className={
            'btn-md  rounded-xl ' +
            (filter === '2019' ? 'btn-primary ring' : '')
          }
          onClick={() => handleButtonClick('2019')}
        >
          2019
        </button>
        <button
          className={
            'btn-md  rounded-xl ' +
            (filter === '2018' ? 'btn-primary ring' : '')
          }
          onClick={() => handleButtonClick('2018')}
        >
          2018
        </button>
      </div>
      <div className=' mx-auto'>
        {Object.keys(games).map((game, index) => {
          return (
            <GameCard
              game={games[game]}
              teams={teams}
              key={index}
              className='w-full'
            />
          )
        })}
      </div>
    </div>
  )
}

export default Games
