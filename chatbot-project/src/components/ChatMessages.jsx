import { useEffect, useRef } from "react";
import RobotProfileImage from "../assets/robot.png";
import ChatMessage from "./ChatMessage";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="js-chat-messages" ref={chatMessagesRef}>
      {chatMessages.length === 0 ? (
        <div className="js-chat-message">
          <img src={RobotProfileImage} width="50" />
          Hello! How can I help you?
        </div>
      ) : (
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })
      )}
    </div>
  );
}

export default ChatMessages;
