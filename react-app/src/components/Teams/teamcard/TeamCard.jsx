import React from 'react'

import './TeamCard.css'

function TeamCard(team) {
  if (team.team.Name === 'Draw') {
    return null
  }
  return (
    <div className='card'>
      <div>
        <img className={team.team.Name} src={team.team.Logo} alt='' />
        <h3 className='teamname'>{team.team.Name.toUpperCase()}</h3>
      </div>
    </div>
  )
}

export default TeamCard
