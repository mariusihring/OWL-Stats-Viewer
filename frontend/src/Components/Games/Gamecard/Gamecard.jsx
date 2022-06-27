import React from 'react'

function GameCard(game, teams) {
  return (
    <div className='game-card'>
      <h1>
        {game.teams[game.game.map_winner - 1].Name}
        {' : '}
        {game.teams[game.game.map_loser - 1].Name}
      </h1>
    </div>
  )
}

export default GameCard
