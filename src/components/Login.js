import { useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import { socket } from "../api/api";
import { useDispatch } from "react-redux";
import {
  setIsAuth,
  setRoomId as setRoomIdAC,
  setUserName as setUserNameAC,
} from "../store/slices/authSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");

  const dispatch = useDispatch();

  const startGame = async () => {
    if (!userName && !roomId) {
      return console.log("Веедите userName и roomId");
    }
    const { status } = await axios.post(`http://localhost/rooms`, {
      userName,
      roomId,
    });
    if (status === 200) {
      dispatch(setIsAuth(true));
      dispatch(setUserNameAC(userName));
      dispatch(setRoomIdAC(roomId));
      socket.emit("ROOM:JOIN", { userName, roomId });
    }
  };

  return (
    <Root>
      <div>
        <button
          onClick={() => {
            setUserName("Никита");
            setRoomId("1");
          }}
        >
          Никита, 1
        </button>
        <button
          onClick={() => {
            setUserName("Максим");
            setRoomId("1");
          }}
        >
          Максим, 1
        </button>
      </div>
      <input
        type="text"
        placeholder="User name"
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
      />
      <input
        type="text"
        placeholder="Room id"
        value={roomId}
        onChange={({ target }) => setRoomId(target.value)}
      />
      <button onClick={startGame}>Start game</button>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Login;
