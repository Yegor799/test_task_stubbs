import "./Chat.css";
import { connect } from "react-redux";
import * as messagesActions from "../../redux/messages/messages-actions";

function Chat({ messages, deleteMessage }) {
  const onClick = (e) => {    
    deleteMessage(e.target.id);
  };

  return (
    <ul className="Chat">
      <h1 className="Chat-title">Chat</h1>
      {messages &&
        messages.map(message => (
          <li key={message.id} id={message.id} className="Chat-message" onClick={onClick}>
            {message.text}
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (id) => dispatch(messagesActions.deleteMessage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
