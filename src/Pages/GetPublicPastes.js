import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase.js';
import { ref, onValue } from 'firebase/database';
import './page.css';

function GetPublicPastes({ pastes, setPastes }) {
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
    <div>
      <Link to='/publicpastes'>
        <p>Public pastes</p>
      </Link>
      {pastes.slice(0, 8).map(paste => (
        <p>
          <Link to={paste.uidd}>{paste.name}</Link>
          {' | ' + paste.paste}
        </p>
      ))}
    </div>
  );
}
export default GetPublicPastes;
