import { useState } from 'react';
import './Chat.css';
import send from '../send.svg';
import icon from '../noun-chat.svg';

const ChatAvatar = ({ left }: ChatProps) => {
  return <div className={`chatAvatar${left ? ' left' : ''}`}></div>;
};

interface ChatProps {
  left?: boolean;
  children?: string;
}

const ChatBubble = ({ left, children }: ChatProps) => {
  return <div className={`chatBubble${left ? ' left' : ''}`}>{children}</div>;
};

const ChatRow = ({ left, children }: ChatProps) => {
  return (
    <div className={`chatRow${left ? ' left' : ''}`}>
      <ChatAvatar left={left} />
      <ChatBubble left={left}>{children}</ChatBubble>
    </div>
  );
};

export const Chat = () => {
  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <img className="appIcon" src={icon} alt="app icon" />
        <div>
          <h2>This is for login</h2>
          <div className="loggedInAvatar"></div>
        </div>
      </div>
      <div className="chatBox">
        <ChatRow left>Test message here</ChatRow>
        <ChatRow left>
          This message is going to be a lot longer and also by someone not me
        </ChatRow>
        <ChatRow>This is a message from myself</ChatRow>
        <ChatRow left>Short msg</ChatRow>
        <ChatRow>LOL!</ChatRow>
        <ChatRow>
          This is a longer message from myself. Not sure how the data will
          return from the database so I'm not sure if this is the oldest message
          or the newest. Easy to fix flex direction though
        </ChatRow>
        <ChatRow>Wow I love palevioletred in this color palette, lol.</ChatRow>
        <ChatRow left>This rocks</ChatRow>
      </div>
      <div className="spacer"></div>
      <form className="chatSubmit">
        <input placeholder="Type your message here..." maxLength={120} />
        <button
          className="sendButton"
          aria-label="send message"
          onClick={(event) => event.preventDefault()}
        >
          <img src={send} />
        </button>
      </form>
    </div>
  );
};
