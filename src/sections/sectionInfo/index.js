import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectLogs } from "../../store/slices/logsSlice";
import DescriptionTooltip from "../../sharedComponents/DescriptionTooltip";

function SectionInfo() {
  const logs = useSelector(selectLogs);

  return (
    <Root>
      <DescriptionTooltip />
      <LogContainer>
        <ShadowBlock />
        {logs.map((log) => (
          <LogMessage>{log}</LogMessage>
        ))}
      </LogContainer>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 10px;
`;
const LogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 10px;
  overflow-y: auto;
  height: 30%;

  /* -webkit-box-shadow: inset 0px 50px 39px -30px #f3c88c;
  box-shadow: inset 0px 100px 40px -50px red; */

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ShadowBlock = styled.div`
  position: absolute;
  top: 69%;
  width: 100%;
  height: 100px;

  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #f3c88c),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  background-image: -o-linear-gradient(
    bottom,
    #f3c88c 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -moz-linear-gradient(
    bottom,
    #f3c88c 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -webkit-linear-gradient(
    bottom,
    #f3c88c 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: -ms-linear-gradient(
    bottom,
    #f3c88c 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background-image: linear-gradient(
    to bottom,
    #f3c88c 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;
const LogMessage = styled.span`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 70%);
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export default SectionInfo;
