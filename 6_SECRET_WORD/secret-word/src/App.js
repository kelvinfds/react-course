// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';

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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];  
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
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
  }, [pickedWordAndCategory]);

  const verifyLetter = (letter) => {    
    const normalizesLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizesLetter) || wrongLetters.includes(normalizesLetter)){
      return;
    }

    if (letters.includes(normalizesLetter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizesLetter]);
    } else {
      setWrongLetters((actuaWrongLetters) => [...actuaWrongLetters, normalizesLetter]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0){
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100);
      startGame();
    }

  },[guessedLetters, letters, startGame])


  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
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
      {gameStage === "end" && <GameOver retry={retry} score={score} /> }
      
    </div>
  );
}

export default App;
