import { useState } from "react";
// import axios from "axios";
// import { socket } from "../api/api";
// import { useDispatch } from "react-redux";
// import { setIsAuth, setUser } from "../store/slices/authSlice";
// import { setRoom } from "../store/slices/usersSlice";

function Login() {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");

  // const dispatch = useDispatch();

  const startGame = async () => {
    // if (!userName && !roomId) {
    //   return console.log("Веедите userName и roomId");
    // }
    // const { status } = await axios.post(`http://localhost/rooms`, {
    //   userName,
    //   roomId,
    // });
    // if (status === 200) {
    //   dispatch(setIsAuth(true));
    //   dispatch(setUser(userName));
    //   dispatch(setRoom(roomId));
    //   socket.emit("ROOM:JOIN", { userName, roomId });
    // }
  };

  return (
    <div>
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
    </div>
  );
}

export default Login;
