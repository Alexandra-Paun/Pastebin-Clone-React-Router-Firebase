import React, { useState } from 'react';
import { auth, db } from './db/firebase.js';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import './style/page.css';
import List from './paste/List.js';
import View from './paste/View.js';

function Paste({ mypastes, setmyPastes, pastes, setPastes, isRegistering }) {
  const [paste, setPaste] = useState('');
  const [pasteName, setPasteName] = useState('');

  const writeToDatabase = () => {
    if (!isRegistering) {
      return;
    }
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      name: pasteName,
      paste: paste,
      uidd: uidd,
      email: auth.currentUser.email,
    });
    setPaste('');
    setPasteName('');
  };

  return (
    <div className='page-class'>
      <aside style={asideStyle}>
        {isRegistering ? (
          <>
            <List mypastes={mypastes} setmyPastes={setmyPastes} />
            <View paste={paste} pastes={pastes} setPastes={setPastes} />
          </>
        ) : (
          <>
            <View paste={paste} pastes={pastes} setPastes={setPastes} />
          </>
        )}
      </aside>
      <h4>New Paste</h4>
      <textarea
        style={labelStyle}
        value={paste}
        onChange={e => setPaste(e.target.value)}
      />
      <br></br>
      <p>Paste Name / Title:</p>
      <input value={pasteName} onChange={e => setPasteName(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={writeToDatabase}>Create New Paste</button>
    </div>
  );
}

const labelStyle = {
  width: '700px',
  height: '300px',
};

const asideStyle = {
  width: '25%',
  paddingLeft: '25px',
  marginLeft: '25px',
  float: 'right',
};

export default Paste;
