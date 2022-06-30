import React from 'react'

function GameCard(data) {
  let match_winner = data.teams[data.game.match_winner - 1].Name
  let firstTeam = data.teams[data.game.map_winner - 1].Name
  let secondTeam = data.teams[data.game.map_loser - 1].Name
  let firstTeamPic = data.teams[data.game.map_winner - 1].Logo
  let secondTeamPic = data.teams[data.game.map_loser - 1].Logo

  if (firstTeam === 'Draw') {
    return null
  }
  return (
    <div class='flex flex-col w-full lg:flex-row p-7 justify-center'>
      <div class='grid flex-grow h-42 card bg-base-300 rounded-box  place-items-center lg:w-48'>
        <img src={firstTeamPic} className='w-16 my-5' />
        <div className='text-center'>{firstTeam}</div>
        {firstTeam === match_winner ? (
          <span class='badge badge-success my-5'>Winner</span>
        ) : (
          <span class='badge badge-warning my-5'>Loser</span>
        )}
      </div>
      <div class='divider lg:divider-horizontal'>Vs.</div>
      <div class='grid flex-grow h-42 card bg-base-300 rounded-box  place-items-center lg:w-48'>
        <img src={secondTeamPic} className='w-16 my-5' />
        <div className='text-center object-center'>{secondTeam}</div>
        {secondTeam === match_winner ? (
          <span class='badge badge-success my-5'>Winner</span>
        ) : (
          <span class='badge badge-warning my-5'>Loser</span>
        )}
      </div>
    </div>
  )
}

export default GameCard
