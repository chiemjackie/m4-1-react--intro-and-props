import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
  if (props.messageType === 'sent') {
    return <div className='chat-message sent'>
    <div className="message-body sent">{props.body}</div>
  </div>
  } else {
    return <div className='chat-message received'>
      <img src={props.user.avatar} className='avatar received' alt={props.user.username}></img>
      <div className='username received'>{props.user.username}</div>
      <div className='message-body received'>{props.body}</div>
    </div>
  }
}

export default ChatMessage;