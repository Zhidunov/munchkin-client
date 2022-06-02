import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import {
  selectIsShowTooltip,
  selectTooltipCard,
} from "../store/slices/commonSlice";

function DescriptionTooltip() {
  const isShowTooltip = useSelector(selectIsShowTooltip);
  const tooltipCard = useSelector(selectTooltipCard);

  console.log("🚀 ~ handleHover ~ isShowTooltip", isShowTooltip);
  return (
    <Root isShowTooltip={isShowTooltip}>
      <CardName dangerouslySetInnerHTML={{ __html: tooltipCard.name }} />
      <Description
        dangerouslySetInnerHTML={{ __html: tooltipCard.description }}
      />
    </Root>
  );
}

const Root = styled.div`
  transition: opacity 300ms;
  opacity: ${({ isShowTooltip }) => (isShowTooltip ? "1" : "0")};
  max-width: 240px;
  min-width: 240px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
  border-radius: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  font-size: 18px;
  line-height: 20px;
  // styles for innerHTML
  .header {
    font-size: 18px;
    font-family: "Raleway", sans-serif;
    padding-bottom: 5px;
    padding-top: 3px;
  }
  .cardName {
    font-size: 24px;
    align-self: center;
    padding-bottom: 10px;
  }
  .price {
    font-size: 20px;
  }
`;
const CardName = styled.div`
  font-size: 24px;
  align-self: center;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default DescriptionTooltip;
