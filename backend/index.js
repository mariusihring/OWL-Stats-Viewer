const express = require('express')
const db = require('./dbverbindung')
const res = require('express/lib/response')
const app = express()
const port = 1337
const cors = require('cors')

var corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions))
// Get Teams
app.get('/getAllTeams', (req, res) => {
  db.query(`SELECT DISTINCT team_one_name as team FROM match_map_stats`)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

// Get Games
app.get('/getAllGames', (req, res) => {
  db.query(
    `SELECT DISTINCT match_map_stats.match_id, match_map_stats.map_winner as winner, match_map_stats.match_winner as "match winner", match_map_stats.map_loser as loser from match_map_stats`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getGames/:year', (req, res) => {
  db.query(
    `SELECT DISTINCT match_map_stats.match_id, match_map_stats.map_winner as winner, match_map_stats.match_winner as "match winner", match_map_stats.map_loser as loser from match_map_stats where match_map_stats.round_start_time like "%${req.params.year}%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
// Get Players
app.get('/2018/:player', (req, res) => {
  db.query(
    `select distinct match_id, player, hero from owl_2018 where owl_2018.player like "${req.params.player}"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2019/:player', (req, res) => {
  db.query(
    `select distinct match_id, player, hero from owl_2019 where owl_2019.player like "${req.params.player}"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2020/:player', (req, res) => {
  db.query(
    `select distinct match_id, player, hero from owl_2020 where owl_2020.player like "${req.params.player}"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2021/:player', (req, res) => {
  db.query(
    `select distinct match_id, player, hero from owl_2021 where owl_2021.player like "${req.params.player}"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
