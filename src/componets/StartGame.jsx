import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import styled from "styled-components";
import { Button } from "../styled/Button";

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
        <LeftButton onClick={toggleGamePlay}>Play Now</LeftButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  padding: 20px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    width: 100%;
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;

      @media (max-width: 768px) {
        font-size: 60px;
        margin-top: 50px;
      }
      @media (min-width: 767px) and (max-width: 992px) {
        font-size: 70px;
      }
    }
  }
`;

const LeftButton = styled(Button)`
  display: block;
  margin-left: auto;
`;
