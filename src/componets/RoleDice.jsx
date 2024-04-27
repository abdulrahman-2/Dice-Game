import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import styled from "styled-components";

export const RoleDice = () => {
  const {
    currentDice,
    selectedNum,
    setSelectedNum,
    setCurrentDice,
    setScore,
    setError,
  } = useContext(DiceContext);

  const generateRandomNum = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const roleDice = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNum = generateRandomNum();
    setCurrentDice(randomNum);

    if (selectedNum == randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - selectedNum);
    }

    setSelectedNum(null);
  };
  return (
    <Container>
      <div className="dice-box">
        <img
          onClick={roleDice}
          src={`/images/dice/dice_${currentDice}.png`}
          alt=""
        />
        <p>Click on Dice to roll</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  min-width: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dice-box {
    cursor: pointer;
    text-align: center;

    p {
      font-size: 24px;
      font-weight: 500;
    }
  }
`;
