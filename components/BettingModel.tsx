import React, { useState } from 'react';

interface Player {
  name: string;
  odds: number;
}

const BettingModel: React.FC = () => {
  const [player1, setPlayer1] = useState<Player>({ name: '', odds: 0 });
  const [player2, setPlayer2] = useState<Player>({ name: '', odds: 0 });

  const handleBet = () => {
    // Here you can add your betting logic
    console.log('Betting...');
  };

  return (
    <div>
      <h1>Tennis Betting Model</h1>
      <div>
        <h2>Player 1</h2>
        <input
          type="text"
          placeholder="Name"
          value={player1.name}
          onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Odds"
          value={player1.odds}
          onChange={(e) => setPlayer1({ ...player1, odds: Number(e.target.value) })}
        />
      </div>
      <div>
        <h2>Player 2</h2>
        <input
          type="text"
          placeholder="Name"
          value={player2.name}
          onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Odds"
          value={player2.odds}
          onChange={(e) => setPlayer2({ ...player2, odds: Number(e.target.value) })}
        />
      </div>
      <button onClick={handleBet}>Bet</button>
    </div>
  );
};

export default BettingModel;