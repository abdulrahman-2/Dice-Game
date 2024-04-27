import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import styled from "styled-components";

export const StartGame = () => {
  const { setIsGameStarted } = useContext(DiceContext);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  min-width: 220px;
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-radius: 6px;
  display: block;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.4s all ease-in-out;
  }
`;
