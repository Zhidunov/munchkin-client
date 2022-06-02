// import { useEffect } from "react";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "./store/slices/authSlice";
import GameBoard from "./components/GameBoard";
// import { setUsers, setMessages } from "./store/slices/usersSlice";
// import { socket } from "./api/api";
import styled from "styled-components";

function App() {
  const isAuth = useSelector(selectIsAuth);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   socket.on("ROOM:JOINED", (users) => {
  //     dispatch(setUsers(users));
  //     console.log("Присоединился новый пользователь", users);
  //   });
  //   socket.on("ROOM:LEAVED", (users) => {
  //     dispatch(setUsers(users));
  //     console.log("Пользователь покинул игру", users);
  //   });
  //   socket.on("ROOM:SENDED_MESSAGE", (messages) => {
  //     dispatch(setMessages(messages));
  //   });
  // }, []);

  return <Root>{!isAuth ? <GameBoard /> : <Login />}</Root>;
}

const Root = styled.div`
  height: 100vh;
  display: flex;
  background-color: #f3c88c;
  font-family: Munchkin;
`;

export default App;
