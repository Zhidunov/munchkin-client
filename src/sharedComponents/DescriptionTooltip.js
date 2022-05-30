import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import {
  selectIsShowTooltip,
  selectDescription,
} from "../store/slices/commonSlice";

function DescriptionTooltip() {
  const isShowTooltip = useSelector(selectIsShowTooltip);
  const description = useSelector(selectDescription);

  return (
    <Root
      isShowTooltip={isShowTooltip}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}

const Root = styled.div`
  transition: opacity 300ms;
  opacity: ${({ isShowTooltip }) => (isShowTooltip ? "1" : "0")};
  font-size: 18px;
  line-height: 20px;
  width: 240px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
  border-radius: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
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

export default DescriptionTooltip;
