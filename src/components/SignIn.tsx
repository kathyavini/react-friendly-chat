import '../styles/SignIn.css';
import icon from '../assets/noun-chat.svg';
import { Link } from 'react-router-dom';

interface SignIn {
  signInWithGoogle: () => void;
}

export const SignIn = ({ signInWithGoogle }: SignIn) => {
  return (
    <div className="signInContainer">
      <div className="blob2"></div>
      <div className="titles">
        <h1>Friendly Chat</h1>
        <h2>With TypeScript</h2>
      </div>
      <img className="icon" src={icon} />
      <div className="signIn">
        <button onClick={() => signInWithGoogle()} className="signInButton">
          Sign in with Google
        </button>
        <Link to="/safety" className="link">
          Is this safe?
        </Link>
      </div>
    </div>
  );
};
