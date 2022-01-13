import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerDetail({ player }) {
  return (
    <>
      <h1>{player.name}</h1>
      <div>
        <p>Position: {player.position}</p>
        <p>Jersey number: {player.id}</p>
        <p>
          team: <Link to={`/teams/${[player.team_id]}`}>{player.team_id}</Link>
        </p>
      </div>
    </>
  );
}
