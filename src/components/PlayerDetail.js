import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <>
      <h1>{player.name}</h1>
      <div>
        <p>Position: {player.position}</p>
        <p>Jersey number: {player.id}</p>
      </div>
    </>
  );
}
