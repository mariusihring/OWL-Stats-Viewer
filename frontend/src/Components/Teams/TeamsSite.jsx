import React from 'react'
import { useState, useEffect } from 'react'
import TeamCard from './TeamCard'
import '../css/TeamsSite.css'

function TeamsSite() {
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
    <div className='team-cards'>
      {Object.keys(teams).map((item) => {
        return (
          <TeamCard className='team-info' key={item} team={teams[item].team} />
        )
      })}
    </div>
  )
}
export default TeamsSite
