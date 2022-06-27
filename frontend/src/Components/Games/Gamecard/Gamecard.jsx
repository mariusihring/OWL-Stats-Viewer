import React from 'react'

function GameCard(game, teams) {
  return (
    <div className='game-card'>
      <h1>{game.teams[game.game.map_winner].Name}</h1>
    </div>
  )
}

export default GameCard
