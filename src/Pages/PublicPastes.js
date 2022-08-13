import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase.js';
import { ref, onValue } from 'firebase/database';
import './page.css';

function PublicPastes({ pastes, setPastes }) {
  useEffect(() => {
    onValue(ref(db), snapshot => {
      setPastes([]);
      snapshot.forEach(childSnapshot => {
        let data = childSnapshot.val();
        if (data !== null) {
          Object.values(data).map(paste => {
            setPastes(oldArray => [...oldArray, paste]);
          });
        }
      });
    });
  }, []);

  return (
    <div className='page-class'>
      <h1>Public Pastes</h1>
      <hr></hr>
      {pastes.map(paste => (
        <p>
          <Link to={paste.uidd}>{paste.paste}</Link>
          {' | ' + paste.email}
        </p>
      ))}
    </div>
  );
}

export default PublicPastes;
