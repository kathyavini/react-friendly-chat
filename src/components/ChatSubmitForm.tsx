import { useState } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import '../styles/ChatSubmitForm.css';

import send from '../send.svg';

interface ChatSubmitProps {
  user: any;
  scrollRef: any;
}

export function ChatSubmitForm({ user, scrollRef }: ChatSubmitProps) {
  const [message, setMessage] = useState('');

  async function saveMessage(messageText: string) {
    try {
      await addDoc(collection(getFirestore(), 'messages'), {
        name: user?.displayName,
        text: messageText,
        avatar: user?.photoURL,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  // Component Event Handlers
  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    saveMessage(message);
    setMessage('');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  return (
    <form className="chatSubmit">
      <input
        placeholder="Type your message here..."
        maxLength={120}
        minLength={1}
        value={message}
        onChange={handleChange}
      />
      <button
        className="sendButton"
        aria-label="send message"
        onClick={handleSubmit}
      >
        <img src={send} />
      </button>
    </form>
  );
}
