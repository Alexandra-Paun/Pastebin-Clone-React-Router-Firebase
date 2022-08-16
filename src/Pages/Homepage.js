import React, { useEffect } from 'react';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

export default function Homepage({ isRegistering}) {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/');
      } 
    });
  }, []);

  return (
    <div className='page-class'>
      {isRegistering ? (
        <>
          <h3>{auth.currentUser.email}'s Pastebin</h3>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
