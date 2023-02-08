import React, { Component } from "react";
import "./ChatHistory.scss";

class ChatHistory extends Component {
  render() {
    return (
      <div className='ChatHistory'>
        <h2>Chat History</h2>
        <div className="chatBody">
          {/* put it here she said... */}
        </div>
      </div>
    );
  };
}

export default ChatHistory;