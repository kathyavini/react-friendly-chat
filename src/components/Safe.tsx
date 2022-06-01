import { Link } from 'react-router-dom';
import '../styles/Safe.css';

export const Safe = () => {
  return (
    <div className="app">
      <div className="safeContainer">
        <p className="message">I think so.</p>
        <p className="message">
          It's only the second time I've used Firebase with Google
          Authentication but I think it's secure.
        </p>
        <p className="message">
          From my end I don't see anything except your email address and the
          time you signed up.
        </p>
        <p className="message">
          All the messages live on the Firebase database though and I can see
          that, so don't write anything embarassing.
        </p>
        <Link to="/">
          <button>Ok I'll try it!</button>
        </Link>
      </div>
    </div>
  );
};
