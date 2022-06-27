import React from 'react'
import './Gamecard.css'
function GameCard(game, teams) {
  return (
    <div className='game-card'>
      <h2>
        {game.teams[game.game.map_winner - 1].Name}
        {' : '}
        {game.teams[game.game.map_loser - 1].Name}
      </h2>
    </div>
  )
}

export default GameCard
