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

app.get('/getAllTeams', (req, res) => {
  db.query(`SELECT DISTINCT team_one_name as team FROM match_map_stats`)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/allGames', (req, res) => {
  db.query(
    `select distinct match_id as id, team_one_name as team_one, team_two_name as team_two from match_map_stats`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2018Games', (req, res) => {
  db.query(
    `select distinct match_id as id, team_one_name as team_one, team_two_name as team_two from match_map_stats where round_start_time like "%2018%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2019Games', (req, res) => {
  db.query(
    `select distinct match_id as id, team_one_name as team_one, team_two_name as team_two from match_map_stats where round_start_time like "%2019%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2020Games', (req, res) => {
  db.query(
    `select distinct match_id as id, team_one_name as team_one, team_two_name as team_two from match_map_stats where round_start_time like "%2020%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2021Games', (req, res) => {
  db.query(
    `select distinct match_id as id, team_one_name as team_one, team_two_name as team_two from match_map_stats where round_start_time like "%2021%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/2018/:player', (req, res) => {
  db.query(
    `select distinct match_id as id, player, hero from owl_2018 where owl_2018.player like "${req.params.player}"`
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
