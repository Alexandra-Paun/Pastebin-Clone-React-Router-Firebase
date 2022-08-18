import React, { useEffect } from 'react';
import './style/page.css';
import View from './paste/View.js';

function PublicPastes({ pastes, setPastes }) {
  return (
    <div className='page-class'>
      <h1>Public Pastes</h1>
      <hr></hr>
      <View pastes={pastes} setPastes={setPastes} />
    </div>
  );
}

export default PublicPastes;
