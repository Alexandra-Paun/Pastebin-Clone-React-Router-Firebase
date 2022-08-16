import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase.js';
import { ref, onValue } from 'firebase/database';
import './page.css';

function GetMyPastes({ mypastes, setmyPastes }) {
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

  return (
    <div>
      <Link to='/mypastes'>
        <p>My pastes</p>
      </Link>
      {mypastes.slice(0, 8).map(mypaste => (
        <p>
          <Link to={mypaste.uidd}>{mypaste.name}</Link>
          {' | ' + mypaste.paste}
        </p>
      ))}
    </div>
  );
}
export default GetMyPastes;
