import React, { useState, useEffect } from 'react';
import '../style/page.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../db/firebase.js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/');
      }
    });
  }, []);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='page-class'>
      <h1>Login</h1>
      <div>
        <input
          type='email'
          placeholder='Email'
          onChange={handleEmailChange}
          value={email}
        />
        <br></br>
        <br></br>
        <input
          type='password'
          onChange={handlePasswordChange}
          value={password}
          placeholder='Password'
        />
        <br></br>
        <br></br>
        <button onClick={handleSignIn}>Sign In</button>
      </div>
      <div></div>
    </div>
  );
}

export default Login;
