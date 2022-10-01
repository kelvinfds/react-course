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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }

  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickedWordAndCategory();
    
    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);    
    
    setGameStage(stages[1].name);    
  };

  const verifyLetter = (letter) => {
    console.log(letter)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }
  
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} /> }
      {gameStage === "game" && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} /> }
      
    </div>
  );
}

export default App;
