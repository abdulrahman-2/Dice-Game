import { useState } from "react";
import { DiceContext } from "./context/DiceContext";
import { StartGame } from "./componets/StartGame";
import { GamePlay } from "./componets/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [selectedNum, setSelectedNum] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const contextValue = {
    isGameStarted,
    setIsGameStarted,
    selectedNum,
    setSelectedNum,
    currentDice,
    setCurrentDice,
    score,
    setScore,
    error,
    setError,
    showRules,
    setShowRules,
  };

  return (
    <DiceContext.Provider value={contextValue}>
      {isGameStarted ? <GamePlay /> : <StartGame />}
    </DiceContext.Provider>
  );
}

export default App;
