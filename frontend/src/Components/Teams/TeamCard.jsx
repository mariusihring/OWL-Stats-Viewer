import React from 'react'
import { useState, useEffect } from 'react'
import '../css/TeamCard.css'

function TeamCard(team) {
  return (
    <div className='card'>
      <div>
        <img className={team.team.Name} src={team.team.Logo} alt='' />
        <h3>{team.team.Name.toUpperCase()}</h3>
      </div>
    </div>
  )
}

export default TeamCard
