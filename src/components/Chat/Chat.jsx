import "./Chat.css";
import { connect } from "react-redux";
import * as messagesActions from "../../redux/messages/messages-actions";
import Message from "../Message/Message";

function Chat({ messages, deleteMessage }) {
  const onClick = (e) => {    
    deleteMessage(e.target.id);
  };

  

  return (
    <div className="Chat">
    <ul className="Chat-messages">      
      {messages &&
        messages.map(message => (
          <li key={message.id} id={message.id} className="Chat-message" onClick={onClick}>
            {message.text}   
            <span className="Chat-date">{new Date().toLocaleTimeString().slice(0,-6)}</span>
          </li>
          
        ))}
      </ul>      
        <Message />      
      </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (id) => dispatch(messagesActions.deleteMessage(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
