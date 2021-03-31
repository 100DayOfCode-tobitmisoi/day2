import React from 'react';
import useFunc from './hooks/useFunc';
import { Endgame, Login, Navbar, Game } from './components/';

function App() {

  const {
    showEndgame,
    handleEndgame,
    winner,
    showLogin,
    handleName,
    ties,
    userName1,
    userName2,
    player1,
    player2,
    handleScore
  } = useFunc()

  console.log(showEndgame)

  return (
    <>
      <div className="app mask">
        {showEndgame ? (
          <Endgame winner={winner} endgame={handleEndgame} />
        ) : null}
        {showLogin ? (<Login names={handleName} />) : null}
        <Navbar
          ties={ties}
          userName1={userName1}
          userName2={userName2}
          player1={player1}
          player2={player2}
        />
        <Game
          userName1={userName1}
          userName2={userName2}
          endgame={handleEndgame}
          handleScore={handleScore}
        />
      </div>
    </>
  )
}

export default App
