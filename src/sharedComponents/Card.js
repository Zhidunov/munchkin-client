import styled from "styled-components/macro";

function Card({
  card = {},
  draggable = false,
  onDragStart = () => {},
  onDragEnd = () => {},
  onDragLeave = () => {},
  onDragOver = () => {},
  onDrop = () => {},
}) {
  return (
    <CardContainer
      isRotated={card.isRotated}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <CardImage draggable={draggable} src={card.imageSrc} />
    </CardContainer>
  );
}

const CardImage = styled.img`
  height: 200px;
  width: 130px;
`;
const CardContainer = styled.div`
  min-width: 130px;
  max-width: 130px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  cursor: ${({ draggable }) => (draggable ? "grab" : "default")};
  user-select: none;
  margin: 10px;
  ${({ isRotated }) =>
    isRotated &&
    "transform: rotate(90deg); margin-left: 30px; margin-right: 30px;"};
  transition: transform 100ms;
  // для анимации увеличения карточки
  /* :hover {
    transform: scale(1.5);
    transition: transform 300ms;
    z-index: 1;
  } */
`;

export default Card;
