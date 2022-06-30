import React from 'react'
import { useState, useEffect } from 'react'
import TeamCard from '../teamcard/TeamCard'

function Teams() {
  const [filter, setFilter] = useState('all')
  const [teams, setTeams] = useState([])
  const [active, setActive] = useState('all')
  useEffect(() => {
    if (filter === 'all') {
      fetch('http://127.0.0.1:1337/getAllTeams', {})
        .then(async (response) => response.json())
        .then(async (response) => {
          setTeams(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (
      (filter === '2021') |
      (filter === '2020') |
      (filter === '2019') |
      (filter === '2018')
    ) {
      fetch(`http://127.0.0.1:1337/getTeams/${filter}`, {})
        .then(async (response) => response.json())
        .then(async (response) => {
          setTeams(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [filter])
  function handleButtonClick(e) {
    setFilter(e)
    setActive(e)
  }

  return (
    <div className=' overflow-hidden'>
      <div className='p-5'>
        <div className='text-center'>
          <button
            className={
              'btn-md  rounded-xl ' +
              (filter === 'all' ? 'btn-primary ring' : '')
            }
            onClick={() => handleButtonClick('all')}
          >
            All
          </button>

          <button
            className={
              'btn-md  rounded-xl ' +
              (filter === '2021' ? 'btn-primary ring' : '')
            }
            onClick={() => handleButtonClick('2021')}
          >
            2021
          </button>
          <button
            className={
              'btn-md  rounded-xl ' +
              (filter === '2020' ? 'btn-primary ring' : '')
            }
            onClick={() => handleButtonClick('2020')}
          >
            2020
          </button>
          <button
            className={
              'btn-md  rounded-xl ' +
              (filter === '2019' ? 'btn-primary ring' : '')
            }
            onClick={() => handleButtonClick('2019')}
          >
            2019
          </button>
          <button
            className={
              'btn-md  rounded-xl ' +
              (filter === '2018' ? 'btn-primary ring' : '')
            }
            onClick={() => handleButtonClick('2018')}
          >
            2018
          </button>
        </div>
      </div>
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-px place-items-center'>
          {Object.keys(teams).map((item) => {
            return (
              <TeamCard
                className='space-x-4 flex-row'
                key={item}
                team={teams[item]}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Teams
