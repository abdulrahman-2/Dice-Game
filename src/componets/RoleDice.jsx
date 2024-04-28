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
      setScore((prev) => prev - 2);
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
  .dice-box {
    text-align: center;
    margin-top: 50px;
    cursor: pointer;
    text-align: center;

    img {
      @media (max-width: 768px) {
        width: 150px;
        height: 150px;
      }
      @media (min-width: 767px) and (max-width: 992px) {
        width: 200px;
        height: 200px;
      }
    }

    p {
      font-size: 24px;
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 18px;
      }
      @media (min-width: 767px) and (max-width: 992px) {
        font-size: 22px;
      }
    }
  }
`;
