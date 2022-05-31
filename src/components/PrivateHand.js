import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectPrivateCards } from "../store/slices/boardsSlice";
import Card from "../sharedComponents/Card";

function PrivateHand() {
  const privateCards = useSelector(selectPrivateCards);

  const handleDragStart = (card) => (event) => {
    event.target.style.opacity = "0";
  };
  const handleDragEnd = (event) => {
    event.target.style.opacity = "1";
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
      {privateCards.map((card) => (
        <Card
          key={`temp_card_${card.id}`}
          card={card}
          draggable
          onDragStart={handleDragStart(card)}
          onDragEnd={handleDragEnd}
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
  width: 550px;
  border: 1px solid black;
  border-top: none;
  overflow-y: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default PrivateHand;
