let players = []

fetch('http://127.0.0.1:1337/getPlayers/2018')
  .then((res) => res.json())
  .then((response) =>
    response.forEach((player) => {
      fetch(
        `http://127.0.0.1:1337/insertPlayer/${player.player}/${player.team}`,
        { method: 'POST' }
      )
        .then((res) => res.json())
        .then((response) => console.log(response))
    })
  )

  .catch((err) => console.log(err))
