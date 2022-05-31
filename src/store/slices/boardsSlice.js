import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stuffBoards: [],
  mainBoard: {
    cards: [],
  },
  privateCards: [],
};

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setStuffBoards: (state, action) => {
      state.stuffBoards = action.payload;
    },
    setMainBoard: (state, action) => {
      state.mainBoard = action.payload;
    },
    setPrivateCards: (state, action) => {
      state.privateCards = action.payload;
    },
  },
});

export const { setStuffBoards, setMainBoard, setPrivateCards } =
  boardsSlice.actions;

export const getCards = () => async (dispatch, getState) => {
  const {
    auth: { userName },
  } = getState();
  const {
    data: { players },
  } = await axios.get(`http://localhost/players`);

  const tempData = players.filter((player) => player.name !== userName);
  const currentPlayer = players.find((player) => player.name === userName);

  const stuffBoards = [currentPlayer, ...tempData].map((player) => {
    if (player.name === userName) {
      return {
        name: "Мой шмот",
        id: player.id,
        order: 0,
        lvl: player.level,
        cards: player.cards_on_board,
        isPersonalCards: true,
      };
    }

    return {
      name: player.name,
      id: player.id,
      order: 1,
      lvl: player.level,
      cards: player.cards_on_board,
      isPersonalCards: false,
    };
  });

  dispatch(setStuffBoards(stuffBoards));
  if (currentPlayer) {
    dispatch(setPrivateCards(currentPlayer.private_cards));
  }
};

export const getMainBoard = () => async (dispatch) => {
  const { data } = await axios.get(`http://localhost/mainboard`);

  dispatch(setMainBoard(data));
};

export const selectStuffBoards = (state) => state.boards.stuffBoards;
export const selectMainBoard = (state) => state.boards.mainBoard;
export const selectPrivateCards = (state) => state.boards.privateCards;

export default boardsSlice.reducer;
