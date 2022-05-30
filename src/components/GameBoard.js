import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import MainBoard from "./MainBoard";
import StuffBoard from "./StuffBoard";
import PrivateHand from "./PrivateHand";
import { getCards, getMainBoard } from "../store/slices/boardsSlice";
import DescriptionTooltip from "../sharedComponents/DescriptionTooltip";

function GameBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getMainBoard());
  }, []);

  return (
    <Root>
      <LogContainer>
        <DescriptionTooltip />
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
  border: 1px solid #e88709;
  max-width: 100%;
`;
const LogContainer = styled.div`
  min-width: 260px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
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
