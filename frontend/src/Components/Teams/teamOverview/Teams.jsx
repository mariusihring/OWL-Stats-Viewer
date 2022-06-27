import React from 'react'
import { useState, useEffect } from 'react'
import TeamCard from '../teamcard/TeamCard'
import './Teams.css'

function Teams() {
  const [filter, setFilter] = useState('all')
  const [teams, setTeams] = useState([])
  const [active, setActive] = useState('all')
  useEffect(() => {
    if (filter === 'all') {
      fetch('http://127.0.0.1:1337/getAllTeams', {})
        .then(async (response) => response.json())
        .then(async (response) => {
          setTeams(response)
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
      fetch(`http://127.0.0.1:1337/getTeams/${filter}`, {})
        .then(async (response) => response.json())
        .then(async (response) => {
          setTeams(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [filter])
  function handleButtonClick(e) {
    setFilter(e)
    setActive(e)
  }

  return (
    <div className='page'>
      <div className='header'>
        <h1>Teams</h1>
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
      <div className='grid'>
        <div className='team-cards'>
          {Object.keys(teams).map((item) => {
            return (
              <TeamCard className='team-info' key={item} team={teams[item]} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Teams
