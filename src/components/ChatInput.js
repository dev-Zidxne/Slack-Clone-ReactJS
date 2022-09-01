import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Zidane Innis",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C5603AQFwxOmluAqhbw/profile-displayphoto-shrink_200_200/0/1661888341256?e=1667433600&v=beta&t=hoRKw4R5jIM3W5osfxgFylS8-e9oc-3raTGAwbN4P6E",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  console.log(channelName);
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
