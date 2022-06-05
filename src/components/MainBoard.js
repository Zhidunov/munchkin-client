import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { selectMainBoard, setCardSelection } from "../store/slices/boardsSlice";
import { selectRoomId } from "../store/slices/authSlice";
import Card from "../sharedComponents/Card";
import { socket } from "../api/api";

function MainBoardContainer() {
  const mainBoard = useSelector(selectMainBoard);
  const roomId = useSelector(selectRoomId);
  const dispatch = useDispatch();

  const [forceCounter, setForceCounter] = useState(0);

  useEffect(() => {
    socket.on("GAME:STARTED_MOVING_CARD", ({ card, board }) => {
      dispatch(setCardSelection(card));
    });
    socket.on("GAME:FINISHED_MOVING_CARD", ({ card, board }) => {
      dispatch(setCardSelection(card));
    });
  }, []);

  const handleDragStart = (card) => (event) => {
    event.target.style.opacity = "0";
    socket.emit("GAME:STARTED_MOVING_CARD", { card, board: "MAIN", roomId });
  };
  const handleDragEnd = (card) => (event) => {
    event.target.style.opacity = "1";
    socket.emit("GAME:FINISHED_MOVING_CARD", { card, board: "MAIN", roomId });
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (card) => (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleBoardDragOver = (event) => {};
  const handleBoardDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Root>
      <FightCounter>
        <Counter2>Уровень: 5.</Counter2>
        <Counter>Текущая боевая сила: {forceCounter}.</Counter>
        <CounterButton onClick={() => setForceCounter((prev) => prev + 1)}>
          +
        </CounterButton>
        <CounterButton onClick={() => setForceCounter((prev) => prev - 1)}>
          -
        </CounterButton>
      </FightCounter>
      <MainBoard onDragOver={handleBoardDragOver} onDrop={handleBoardDrop}>
        {mainBoard?.cards_on_board?.map((card) => (
          <Card
            key={`temp_card_${card.id}`}
            card={card}
            draggable={true}
            onDragStart={handleDragStart(card)}
            onDragEnd={handleDragEnd(card)}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop(card)}
          />
        ))}
      </MainBoard>
    </Root>
  );
}

const Counter = styled.span`
  margin-right: 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Counter2 = styled.span`
  margin-right: 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 100 !important;
`;
const CounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 8px;
`;
const MainBoard = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FightCounter = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f7b560;
`;

export default MainBoardContainer;
