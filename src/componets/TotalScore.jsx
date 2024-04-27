import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import styled from "styled-components";

export const TotalScore = () => {
  const { score } = useContext(DiceContext);
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
