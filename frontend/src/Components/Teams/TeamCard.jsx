import React from 'react'
import { useState, useEffect } from 'react'
import '../css/TeamCard.css'

function TeamCard(team) {
  //<span>{team.team}</span>
  return (
    <div className='card'>
      <img
        src='https://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt2536ef613e08024b/5cdf279d9847597506f88047/609VVM89F1BY1542673347592.svg?auto=webp'
        alt=''
      />
      <h3>{team.team}</h3>
    </div>
  )
}

export default TeamCard
