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
          From my end I can only see your name, email, and the time you signed
          up. In the chat only your avatar displays, but if someone uses dev
          tools, they can see your name too.
        </p>
        <p className="message">
          All the messages live on the Firebase database though so please don't
          write anything sensitive.
        </p>

        <Link to="/">
          <button>Ok I'll try it!</button>
        </Link>
      </div>
    </div>
  );
};
