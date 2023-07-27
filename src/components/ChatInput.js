import { Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Pratik Puri",
      userImage:
        "https://th.bing.com/th/id/R.cf88c24d425eb3c37fe6a854d64ffcc8?rik=P3%2f7V0hKnJ0Xwg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gOCjSQTCcG4%2fTypUG0JQl8I%2fAAAAAAAAKgg%2fKxMQ04eb5sA%2fs1600%2fPopeye%2b1.jpg&ehk=2nrXEX%2bPsRVMYJTET8l4hRTvRlQbF0QjEChxL1ElnAE%3d&risl=&pid=ImgRaw&r=0",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
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
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
