import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5600");

function Chat() {
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const loginUser = () => {
    if (!username.trim()) {
      alert("Enter username");
      return;
    }

    setCurrentUser(username);
    socket.emit("addUser", username);
  };

  const sendMessage = () => {
    if (!selectedUser || !message.trim()) {
      alert("Select user and type message");
      return;
    }

    socket.emit("sendMessage", {
      sender: currentUser,
      receiver: selectedUser,
      text: message,
    });

    setMessage("");
  };

  useEffect(() => {
    socket.on("onlineUsers", (users) => {
      setOnlineUsers(users);
    });

    socket.on("receiveMessage", (msg) => {
      setMessages((old) => [...old, msg]);
    });

    return () => {
      socket.off("onlineUsers");
      socket.off("receiveMessage");
    };
  }, []);

  if (!currentUser) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Login Chat</h2>

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={loginUser}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Welcome: {currentUser}</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{ width: "250px", border: "1px solid gray", padding: "15px" }}
        >
          <h3>Online Users</h3>

          {onlineUsers
            .filter((u) => u.username !== currentUser)
            .map((u) => (
              <button
                key={u.socketId}
                onClick={() => setSelectedUser(u.username)}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  background: selectedUser === u.username ? "green" : "gray",
                  color: "white",
                  padding: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {u.username}
              </button>
            ))}
        </div>

        <div
          style={{ width: "500px", border: "1px solid gray", padding: "15px" }}
        >
          <h3>Chat with: {selectedUser || "No user selected"}</h3>

          <div
            style={{
              height: "300px",
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {messages
              .filter(
                (m) =>
                  (m.sender === currentUser && m.receiver === selectedUser) ||
                  (m.sender === selectedUser && m.receiver === currentUser),
              )
              .map((m, index) => (
                <p key={index}>
                  <b>{m.sender}: </b>
                  {m.text}
                </p>
              ))}
          </div>

          <input
            type="text"
            placeholder="Type message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: "75%", padding: "10px" }}
          />

          <button onClick={sendMessage} style={{ padding: "10px" }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
