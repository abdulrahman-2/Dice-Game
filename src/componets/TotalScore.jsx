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

    @media (max-width: 768px) {
      font-size: 70px;
    }
    @media (min-width: 767px) and (max-width: 992px) {
      font-size: 80px;
    }
  }
  p {
    font-size: 24px;
    font-weight: 500px;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-top: -10px;
      margin-bottom: 20px;
    }
    @media (min-width: 767px) and (max-width: 992px) {
      font-size: 22px;
    }
  }
`;
