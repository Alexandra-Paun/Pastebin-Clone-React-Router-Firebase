import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import './page.css';

function Register() {
  const navigate = useNavigate();
  const [registerInformation, setRegisterInformation] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/');
      }
    });
  }, []);

  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert('Please confirm that email are the same');
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert('Please confirm that password are the same');
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate('/');
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='page-class'>
      <h1>Register</h1>
      <div>
        <input
          type='email'
          placeholder='Email'
          value={registerInformation.email}
          onChange={e =>
            setRegisterInformation({
              ...registerInformation,
              email: e.target.value,
            })
          }
        />
        <br></br>
        <br></br>
        <input
          type='email'
          placeholder='Confirm Email'
          value={registerInformation.confirmEmail}
          onChange={e =>
            setRegisterInformation({
              ...registerInformation,
              confirmEmail: e.target.value,
            })
          }
        />
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='Password'
          value={registerInformation.password}
          onChange={e =>
            setRegisterInformation({
              ...registerInformation,
              password: e.target.value,
            })
          }
        />
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='Confirm Password'
          value={registerInformation.confirmPassword}
          onChange={e =>
            setRegisterInformation({
              ...registerInformation,
              confirmPassword: e.target.value,
            })
          }
        />
        <br></br>
        <br></br>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;
