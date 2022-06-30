import React from 'react'

function TeamCard(team) {
  if (team.team.Name === 'Draw') {
    return null
  }
  return (
    <div className='card w-96 bg-slate-800 shadow-xl'>
      <figure>
        <img
          src={team.team.Logo}
          alt='Team Logo'
          className=' w-96 sm:w-64  select-none'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title  select-none'>
          {team.team.Name.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}

export default TeamCard
