import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components/macro";
import { selectStuffBoards } from "../store/slices/boardsSlice";
import Card from "../sharedComponents/Card";

function StuffBoard() {
  const stuffBoards = useSelector(selectStuffBoards);

  const handleDragStart = (card, board) => (event) => {
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
  const handleDrop = (card, board) => (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleBoardDragOver = (event) => {};
  const handleBoardDrop = (board) => (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledTabsContainer>
      <StyledTabs>
        <TabList>
          {stuffBoards.map((board) => (
            <Tab key={board.name}>{`${board.name}, уровень: ${board.lvl}`}</Tab>
          ))}
        </TabList>
        {stuffBoards.map((board) => (
          <StyledTabPanel
            key={board.name}
            onDragOver={handleBoardDragOver}
            onDrop={handleBoardDrop(board)}
          >
            {board.cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                draggable={board.isPersonalCards}
                onDragStart={handleDragStart(card, board)}
                onDragEnd={handleDragEnd}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop(card, board)}
              />
            ))}
          </StyledTabPanel>
        ))}
      </StyledTabs>
    </StyledTabsContainer>
  );
}

const StyledTabsContainer = styled.div`
  height: 350px;
  border: 1px solid #e88709;
  max-width: 100vw;
`;

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  align-items: center;
`;
const StyledTabs = styled(Tabs)`
  .react-tabs__tab-panel--selected {
    height: calc(100% - 33px);
    overflow: auto;
  }
  .react-tabs__tab-list {
    margin-bottom: 0;
  }
  height: 100%;
`;

export default StuffBoard;
