import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import { NumberSelector } from "./NumberSelector";
import { RoleDice } from "./RoleDice";
import { TotalScore } from "./TotalScore";
import Rules from "./Rules";
import styled from "styled-components";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";

export const GamePlay = () => {
  const { setScore, showRules, setShowRules } = useContext(DiceContext);

  return (
    <>
      <Container>
        <div className="top">
          <TotalScore />
          <NumberSelector />
        </div>
        <RoleDice />
        <div className="btns">
          <OutlineButton onClick={() => setScore(0)}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
        {showRules ? <Rules /> : ""}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1300px;
  /* height: 100vh; */
  margin: 50px auto 0;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btns {
    max-width: 220px;
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    gap: 10px;
  }
`;
