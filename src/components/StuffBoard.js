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
  );
}

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
    border-color: black;
  }
  .react-tabs__tab {
    background-color: #f3c88c;
    border: 1px solid black;
    /* border-bottom: none; */
    border-radius: 10px 10px 0 0;
    margin-right: 5px;
  }
  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 0px;
    left: 0;
    right: 0;
    background: #f3c88c;
  }
  .react-tabs__tab--selected {
    border-bottom-color: #f3c88c;
  }
  height: 100%;
`;

export default StuffBoard;
