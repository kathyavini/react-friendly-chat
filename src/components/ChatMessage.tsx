import '../styles/ChatMessage.css';

interface ChatProps {
  left?: boolean;
  children: string;
  avatar: string;
  initial?: string;
}

export const ChatRow = ({ left, children, avatar, initial }: ChatProps) => {
  return (
    <div className={`chatRow${left ? ' left' : ''}`}>
      <ChatAvatar avatar={avatar} initial={initial} />
      <ChatBubble left={left}>{children}</ChatBubble>
    </div>
  );
};

interface AvatarProps {
  left?: boolean;
  avatar?: string;
  initial?: string;
}

const ChatAvatar = ({ avatar, initial, left }: AvatarProps) => {
  return (
    <>
      {avatar ? (
        <img
          referrerPolicy="no-referrer"
          src={avatar}
          className={`chatAvatar${left ? ' left' : ''}`}
        />
      ) : (
        // Again, not used any longer. But keeping for future use
        <div className={`chatAvatar${left ? ' left' : ''}`}>
          <p>{initial}</p>
        </div>
      )}
    </>
  );
};

interface BubbleProps {
  left?: boolean;
  children?: string;
}
const ChatBubble = ({ left, children }: BubbleProps) => {
  return <div className={`chatBubble${left ? ' left' : ''}`}>{children}</div>;
};
