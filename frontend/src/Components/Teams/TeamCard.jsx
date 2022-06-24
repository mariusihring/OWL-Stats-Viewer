import React from 'react'
import { useState, useEffect } from 'react'
import '../css/TeamCard.css'

function TeamCard(team) {
  return (
    <div className='card'>
      <img className={team.team.Name} src={team.team.Logo} alt='' />
      <h3>{team.team.Name}</h3>
    </div>
  )
}

export default TeamCard
