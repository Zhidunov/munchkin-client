import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import MainBoard from "./MainBoard";
import StuffBoard from "./StuffBoard";
import PrivateHand from "./PrivateHand";
import { getCards, getMainBoard } from "../store/slices/boardsSlice";

function GameBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getMainBoard());
  }, []);

  return (
    <Root>
      <StuffBoard />
      <Board>
        <PrivateHand />
        <MainBoard />
      </Board>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Board = styled.div`
  display: flex;
  flex: 1;
  height: calc(100% - 350px);
`;

export default GameBoard;
