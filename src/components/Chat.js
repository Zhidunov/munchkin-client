import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUsers,
  selectRoomId,
  getRoom,
  selectMessages,
  setMessages,
} from "../store/slices/usersSlice";
import { selectUserName } from "../store/slices/authSlice";
import { socket } from "../api/api";

function Chat() {
  const [messageText, setMessageText] = useState("");

  const users = useSelector(selectUsers);
  const messages = useSelector(selectMessages);
  const roomId = useSelector(selectRoomId);
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoom(roomId));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (!messageText) {
      return console.log("Веедите сообщение");
    }

    socket.emit("ROOM:SEND_MESSAGE", { userName, roomId, text: messageText });
    dispatch(
      setMessages([
        ...messages,
        { userName, id: new Date(), text: messageText },
      ])
    );
    setMessageText("");
  };

  return (
    <div>
      <span>{`Online: (${users.length})`}</span>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <textarea
          value={messageText}
          onChange={({ target }) => setMessageText(target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{`${message.userName}: ${message.text}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
