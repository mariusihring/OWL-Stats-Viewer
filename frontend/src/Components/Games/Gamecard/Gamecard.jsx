import React from "react";
import "./Gamecard.css";

function GameCard(props) {
  const match_winner = props.teams[props.game.match_winner - 1].Name;
  const firstTeam = props.teams[props.game.map_winner - 1].Name;
  const secondTeam = props.teams[props.game.map_loser - 1].Name;
  return (
    <div className="game-card">
      <p>
        <span className={match_winner === firstTeam ? "winner" : null}>
          {firstTeam}
        </span>
        {" : "}
        <span className={match_winner === secondTeam ? "winner" : null}>
          {secondTeam}
        </span>
      </p>
    </div>
  );
}

export default GameCard;
