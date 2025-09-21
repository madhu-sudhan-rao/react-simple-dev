import { useState } from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ chatMessages, setChatMessages }) {
  // Pascal Case for component's name
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="js-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="js-input-text"
      />
      <button onClick={sendMessage} className="js-send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
