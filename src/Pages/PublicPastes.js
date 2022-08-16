import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase.js';
import { ref, onValue } from 'firebase/database';
import './page.css';
import GetPublicPastes from './GetPublicPastes.js';

function PublicPastes({ pastes, setPastes }) {
  return (
    <div className='page-class'>
      <h1>Public Pastes</h1>
      <hr></hr>
      <GetPublicPastes pastes={pastes} setPastes={setPastes} />
    </div>
  );
}

export default PublicPastes;
