// CSS
import './App.css';
// React
import { useState } from 'react';

// Data
import { wordList } from './data/words';

// Components
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  console.log(words);
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} /> }
      {gameStage === "game" && <Game verifyLetter={verifyLetter} /> }
      {gameStage === "end" && <GameOver retry={retry} /> }
      
    </div>
  );
}

export default App;
