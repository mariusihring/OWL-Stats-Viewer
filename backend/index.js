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
  db.query(`SELECT Name, Logo, team_id FROM team_info`)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getTeams/:year', (req, res) => {
  db.query(
    `select team_info.Name, team_info.Logo from team_info inner join teams_in_year on team_info.team_id = teams_in_year.team_id where teams_in_year.year = "${req.params.year}"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
// Get Players
app.post('/insertPlayer/:name/:team', (req, res) => {
  db.query(
    `insert into player_info (Name, team) values ("${req.params.name}", "${req.params.team}")`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getPlayers/:year', (req, res) => {
  db.query(
    `select distinct owl_${req.params.year}.player , team from owl_${req.params.year}`
  )
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
    `select DISTINCT match_id, match_winner, map_winner, map_loser from match_map_stats`
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
    `SELECT DISTINCT match_id, map_winner , match_winner, map_loser from match_map_stats where round_start_time like "%${req.params.year}%"`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getSpecificMatch/:match', (req, res) => {
  db.query(`select * from match_map_stats where match_id = ${req.params.match}`)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getSpecificRound/:match/:round', (req, res) => {
  db.query(
    `select * from match_map_stats where match_id = ${req.params.match} and game_number = ${req.params.round}`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getGame/:team', (req, res) => {
  db.query(
    `SELECT distinct match_id, match_winner, team_one_name, team_two_name FROM match_map_stats where team_one_name like "%${req.params.team}" or team_two_name like "%${req.params.team}";`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getGame/:year/:team', (req, res) => {
  db.query(
    `SELECT distinct match_id, match_winner, team_one_name, team_two_name FROM match_map_stats where team_one_name like "%${req.params.team}" or team_two_name like "%${req.params.team}" and round_start_time like "%${req.params.year}%";`
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

// get Player Stats for Game
app.get('/getStats/:year/:player/:game', (req, res) => {
  db.query(
    `select * from owl_${req.params.year} where player like "${req.params.player}" and match_id = ${req.params.game}`
  )
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})
app.get('/getSeasonStats/:year/:player', (req, res) => {
  db.query(
    `select * from owl_${req.params.year} where player like "${req.params.player}" and hero = "All Heroes"`
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
