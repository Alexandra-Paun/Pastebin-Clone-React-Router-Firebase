import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from './db/firebase.js';
import { ref, onValue, remove } from 'firebase/database';
import './style/page.css';

function MyPastes({ mypastes, setmyPastes }) {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
          setmyPastes([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map(mypaste => {
              setmyPastes(oldArray => [...oldArray, mypaste]);
            });
          }
        });
      }
    });
  }, []);

  const handleDelete = uid => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  return (
    <div className='page-class'>
      <h1>My Pastes</h1>
      <hr></hr>
      {mypastes.map(mypaste => (
        <p>
          <Link to={mypaste.uidd}>{mypaste.name}</Link>
          {' | ' + mypaste.paste + ' '}
          <button onClick={() => handleDelete(mypaste.uidd)}>delete</button>
        </p>
      ))}
    </div>
  );
}

export default MyPastes;
