import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import MainBoard from "./MainBoard";
import StuffBoard from "./StuffBoard";
import PrivateHand from "./PrivateHand";
import { getCards, getMainBoard } from "../store/slices/boardsSlice";
import SectionInfo from "../sections/sectionInfo";

function GameBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getMainBoard());
  }, []);

  return (
    <Root>
      <LogContainer>
        <SectionInfo />
      </LogContainer>
      <GameContainer>
        <StuffBoardContainer>
          <StuffBoard />
        </StuffBoardContainer>
        <Board>
          <PrivateHand />
          <MainBoard />
        </Board>
      </GameContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  width: 100%;
`;
const StuffBoardContainer = styled.div`
  height: 350px;
  border: 1px solid black;
  border-top: none;
  max-width: 100%;
`;
const LogContainer = styled.div`
  min-width: 265px;
  max-width: 265px;
`;
const GameContainer = styled.div`
  width: 100%;
`;
const Board = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 350px);
`;

export default GameBoard;
