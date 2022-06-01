import './Safe.css';

export const Safe = () => {
  return (
    <div className="safeContainer">
      <p className="message">
        I <span>think</span> so.
      </p>
      <p className="message">
        It's only the second time I've used Firebase with Google Authentication
        but I think it's secure.
      </p>
      <p className="message">
        From my end I don't see anything except your email address and the time
        you signed up.
      </p>
      <p className="message">
        All the messages live on the Firebase database though and I can see
        that, so don't write anything embarassing.
      </p>
      <button>Ok I'll log in!</button>
    </div>
  );
};
