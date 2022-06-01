import { useEffect, useRef } from 'react';
import '../styles/Chat.css';
import icon from '../noun-chat.svg';
import { ChatRow } from './ChatMessage';

import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatSubmitForm } from './ChatSubmitForm';

interface Chat {
  signOutofGoogle: () => void;
  user: any;
}

export const Chat = ({ signOutofGoogle, user }: Chat) => {
  const messagesRef = collection(getFirestore(), 'messages');
  const messageQuery = query(
    messagesRef,
    orderBy('timestamp', 'asc'),
    limit(25)
  );

  // TypeScript issue I don't understand means I can't get the document ID from this
  const [allMessages] = useCollectionData(messageQuery);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log(allMessages);
  }, [allMessages]);

  function renderMessages() {
    return allMessages?.map((message, index) => {
      if (message.name === user.displayName) {
        return (
          <ChatRow key={index} avatar={message.avatar}>
            {message.text}
          </ChatRow>
        );
      } else {
        return (
          // This first initial solution is nice so I'm going to leave it, but it won't get used since the no-referrer prop on the img tag fixes the 403 forbidden I was seeing on the avatar URL and so I will always pass an avatar. But to leave the possibility for a different implementation in the future I'll leave it!
          <ChatRow
            key={index}
            left
            avatar={message.avatar}
            initial={message.name[0]}
          >
            {message.text}
          </ChatRow>
        );
      }
    });
  }

  // For smooth scrolling after submit
  const scrollRef = useRef<HTMLDivElement>(null!);

  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <img className="appIcon" src={icon} alt="app icon" />
        <div>
          <h2>{user.displayName}</h2>
          <img
            src={user.photoURL}
            className="loggedInAvatar"
            onClick={signOutofGoogle}
          ></img>
        </div>
      </div>
      <div className="chatBox">
        {renderMessages()}
        <div ref={scrollRef}></div>
      </div>
      <div className="spacer"></div>
      <ChatSubmitForm user={user} scrollRef={scrollRef} />
    </div>
  );
};
