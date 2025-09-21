
import UserProfileImage from '../assets/user.png';
import RobotProfileImage from '../assets/robot.png';

function ChatMessage({ message, sender }) {
  return (
    <div className="js-chat-message">
      {sender === "robot" && <img src={RobotProfileImage} width="50" />}
      {message}
      {sender === "user" && <img src={UserProfileImage} width="50" />}
    </div>
  );
}

export default ChatMessage;