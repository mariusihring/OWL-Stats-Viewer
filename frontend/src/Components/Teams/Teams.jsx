import React from 'react'
import { useState, useEffect } from 'react'
import TeamCard from './TeamCard'
import '../css/Teams.css'

function Teams() {
  const [teams, setTeams] = useState([])
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

  return (
    <div className='page'>
      <div className='header'>
        <h1>Teams</h1>
        <div className='year-buttons'>
          <button className='test'>All</button>
          <button>2021</button>
          <button>2020</button>
          <button>2019</button>
          <button>2018</button>
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
