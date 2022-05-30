import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    messages: [],
    roomId: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setRoom: (state, action) => {
      state.roomId = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setUsers, setRoom, setMessages } = usersSlice.actions;

export const getRoom = (id) => async (dispatch) => {
  const {
    data: { users, messages },
  } = await axios.get(`http://localhost/rooms/${id}`);
  dispatch(setUsers(users));
  dispatch(setMessages(messages));
};

export const selectUsers = (state) => state.users.users;
export const selectMessages = (state) => state.users.messages;
export const selectRoomId = (state) => state.users.roomId;

export default usersSlice.reducer;
