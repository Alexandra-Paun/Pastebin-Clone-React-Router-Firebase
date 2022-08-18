import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { auth } from '../db/firebase.js';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Nav({ isRegistering, setIsRegistering }) {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsRegistering(true);
        navigate('/');
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsRegistering(false);
        navigate('/');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <h3>PASTEBIN</h3>
        </Link>
        <Link style={navStyle} to='/API'>
          <li>API</li>
        </Link>
        <Link style={navStyle} to='/tools'>
          <li>TOOLS</li>
        </Link>
        <Link style={navStyle} to='/faq'>
          <li>FAQ</li>
        </Link>
        <Link to='/'>
          <button style={pasteStyle}>+ paste</button>
        </Link>
      </ul>

      <ul className='nav-register'>
        {isRegistering ? (
          <>
            <Link to='/homepage'>
              <AccountBoxIcon style={{ color: 'white' }} />
            </Link>
            <Link to='/'>
              <button style={registerStyle} onClick={handleSignOut}>
                SIGN OUT
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button style={loginStyle}>LOGIN</button>
            </Link>
            <Link to='/register'>
              <button style={registerStyle}>SIGN UP </button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

const navStyle = {
  color: 'white',
  textDecoration: 'none',
};
const pasteStyle = {
  backgroundColor: '#4CAF50',
  color: ' white',
  border: 'white',
};
const loginStyle = {
  backgroundColor: 'rgba(5, 59, 95, 0.973)',
  color: ' white',
  border: ' 1px solid white',
};
const registerStyle = {
  backgroundColor: 'white',
  color: ' rgba(5, 59, 95, 0.973)',
  border: ' 1px solid white',
};

export default Nav;
