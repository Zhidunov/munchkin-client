import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectCurrentUser } from "../store/slices/userSlice";
import Card from "../sharedComponents/Card";
import { socket } from "../api/api";

function PrivateHand() {
  const currentUser = useSelector(selectCurrentUser);

  const handleDragStart = (card) => (event) => {
    event.target.style.opacity = "0";
    socket.emit("GAME:STARTED_MOVING_CARD", { card, board: "PRIVATE" });
  };
  const handleDragEnd = (card) => (event) => {
    event.target.style.opacity = "1";
    socket.emit("GAME:FINISHED_MOVING_CARD", { card, board: "PRIVATE" });
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
    <CardsInHand onDragOver={handleBoardDragOver} onDrop={handleBoardDrop}>
      {currentUser?.private_hand?.map((card) => (
        <Card
          key={`temp_card_${card.id}`}
          card={card}
          draggable
          onDragStart={handleDragStart(card)}
          onDragEnd={handleDragEnd(card)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop(card)}
        />
      ))}
    </CardsInHand>
  );
}

const CardsInHand = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 450px;
  border: 1px solid black;
  border-top: none;
  overflow-y: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default PrivateHand;
