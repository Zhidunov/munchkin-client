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
  },
});

export const { setStuffBoards, setMainBoard, setPlayers } = boardsSlice.actions;

export const getRoom = () => async (dispatch, getState) => {
  const {
    auth: { userId, roomId },
  } = getState();
  const { data } = await axios.get(
    `http://localhost/rooms?userId=${userId}&roomId=${roomId}`
  );

  dispatch(setMainBoard(data.main_board));
  dispatch(setPlayers(data.players));
};

export const getStuffBoards = () => async (dispatch, getState) => {
  const {
    auth: { userId, roomId },
  } = getState();
  const { data } = await axios.get(
    `http://localhost/boards?userId=${userId}&roomId=${roomId}`
  );

  dispatch(setStuffBoards(data.other_players_stuff));
};

export const selectStuffBoards = (state) => state.boards.stuffBoards;
export const selectMainBoard = (state) => state.boards.mainBoard;
export const selectPlayers = (state) => state.boards.players;

export default boardsSlice.reducer;
