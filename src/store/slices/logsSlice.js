import { createSlice } from "@reduxjs/toolkit";

export const logsSlice = createSlice({
  name: "logs",
  initialState: {
    logs: [
      "Максим с руки вводит в игру карточку Вор",
      "Женя подрезает игрока Никита на -3",
      "Никита использует Зелье +5 любой стороне",
      "Никита зашел в игру",
    ],
  },
  reducers: {
    setLogs: (state, action) => {
      state.logs = action.payload;
    },
    addLog: (state, action) => {
      state.logs.unshift(action.payload);
    },
  },
});

export const { setLogs, addLog } = logsSlice.actions;

export const selectLogs = (state) => state.logs.logs;

export default logsSlice.reducer;
