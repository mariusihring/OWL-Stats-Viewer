import React from 'react'
import './Gamecard.css'

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
    <div className='game-card'>
      <div className=' firstLogo'>
        <img className='logo-preview' src={firstTeamPic} />
      </div>
      <div className='content'>
        <p className={match_winner === firstTeam ? 'winner' : null}>
          {firstTeam}
        </p>
        {' : '}
        <p className={match_winner === secondTeam ? 'winner' : null}>
          {secondTeam}
        </p>
      </div>
      <div className='secondLogo'>
        <img className='logo-preview' src={secondTeamPic} />
      </div>
    </div>
  )
}

export default GameCard
