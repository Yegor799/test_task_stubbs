import "./Chat.css";
import { connect } from "react-redux";
import * as messagesActions from "../../redux/messages/messages-actions";

function Chat({ messages, deleteMessage }) {
  const onClick = (e) => {
    deleteMessage(e.target.innerHTML);
  };

  return (
    <ul className="Chat">
      <h1 className="Chat-title">Chat</h1>
      {messages &&
        messages.map((message, idx) => (
          <li key={idx} className="Chat-message" onClick={onClick}>
            {message}
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (message) => dispatch(messagesActions.deleteMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
