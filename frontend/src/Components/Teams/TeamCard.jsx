import React from 'react'
import { useState, useEffect } from 'react'
import '../css/TeamCard.css'

function TeamCard(team) {
  //<span>{team.team}</span>
  return (
    <div className='card'>
      <span>image</span>
      <h3>{team.team}</h3>
    </div>
  )
}

export default TeamCard
