import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stuffBoards: [],
  mainBoard: {},
  players: [],
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
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setCardsOnBoard: (state, action) => {
      state.mainBoard.cards_on_board = action.payload;
    },
    setCardSelection: (state, action) => {
      state.mainBoard.cards_on_board = state.mainBoard.cards_on_board.map(
        (card) =>
          card.id === action.payload.id
            ? { ...card, is_selected: !card.is_selected }
            : card
      );
    },
  },
});

export const {
  setStuffBoards,
  setMainBoard,
  setPlayers,
  setCardsOnBoard,
  setCardSelection,
} = boardsSlice.actions;

export const getRoom = () => async (dispatch, getState) => {
  const {
    auth: { userName, roomId },
  } = getState();
  const { data } = await axios.get(
    `http://localhost/room?userName=${userName}&roomId=${roomId}`
  );

  dispatch(setMainBoard(data.main_board));
  dispatch(setPlayers(data.players));
};

export const getStuffBoards = () => async (dispatch, getState) => {
  const {
    auth: { userName, roomId },
  } = getState();
  const { data } = await axios.get(
    `http://localhost/boards?userName=${userName}&roomId=${roomId}`
  );

  dispatch(setStuffBoards(data.other_players_stuff));
};

export const selectStuffBoards = (state) => state.boards.stuffBoards;
export const selectMainBoard = (state) => state.boards.mainBoard;
export const selectPlayers = (state) => state.boards.players;

export default boardsSlice.reducer;
