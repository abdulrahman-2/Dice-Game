import { useContext } from "react";
import { DiceContext } from "../context/DiceContext";
import styled, { StyleSheetManager } from "styled-components";

export const NumberSelector = () => {
  const { selectedNum, setSelectedNum, error, setError } =
    useContext(DiceContext);
  const numArray = [1, 2, 3, 4, 5, 6];

  const selectNum = (num) => {
    setSelectedNum(num);
    setError("");
  };

  const numbers = numArray.map((num, index) => (
    <Box
      key={index}
      isSelected={selectedNum === num}
      onClick={() => {
        selectNum(num);
      }}
    >
      {num}
    </Box>
  ));

  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isSelected"}>
        <Container>
          <p className="error">{error}</p>
          <div className="numContent">{numbers}</div>
          <p>Select Number</p>
        </Container>
      </StyleSheetManager>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .numContent {
    display: flex;
    gap: 25px;

    @media (max-width: 768px) {
      gap: 5px;
    }
  }
  p.error {
    color: red;
  }
  p {
    text-align: right;
    font-size: 25px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 767px) and (max-width: 992px) {
      font-size: 22px;
    }
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-size: 25px;
  font-weight: 700;
  border-radius: 3px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  @media (min-width: 767px) and (max-width: 992px) {
    width: 64px;
    height: 64px;
    font-size: 20px;
  }
`;
