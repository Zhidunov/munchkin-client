import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { setIsShowTooltip, setDescription } from "../store/slices/commonSlice";

function Card({
  card = {},
  draggable = false,
  onDragStart = () => {},
  onDragEnd = () => {},
  onDragLeave = () => {},
  onDragOver = () => {},
  onDrop = () => {},
}) {
  const dispatch = useDispatch();

  const handleHover = (e) => {
    dispatch(setDescription(card.text));
    dispatch(setIsShowTooltip(true));
  };
  const handleLeave = (e) => {
    dispatch(setIsShowTooltip(false));
  };

  return (
    <CardContainer
      isRotated={card.isRotated}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
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
  :hover {
    transform: scale(1.5);
    transition: transform 300ms;
    z-index: 1;
  }
`;

export default Card;
