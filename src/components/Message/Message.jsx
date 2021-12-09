import "./Message.css";
import * as messagesActions from "../../redux/messages/messages-actions";
import { connect } from "react-redux";
import { useState } from "react";

function Message({ addMessage }) {
  const [message, setMessage] = useState("");

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (message.trim().length === 0) {
      alert("Please enter your message");
      setMessage("");
      return;
    }
    addMessage(message);
    setMessage("");
  };

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <form className="Message" onSubmit={handleAddMessage}>
        <input
          value={message}
          type="text"
          onChange={onInputChange}
          className="Message-input"
        />
        <button type="submit" className="Message-button">
          Send
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text) => dispatch(messagesActions.addMessage(text)),
});

export default connect(null, mapDispatchToProps)(Message);
