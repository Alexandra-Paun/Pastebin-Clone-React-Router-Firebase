import React from 'react';
import './page.css';
import GetMyPastes from './GetMyPastes.js';
import GetPublicPastes from './GetPublicPastes.js';

function Tools({ mypastes, setmyPastes, pastes, setPastes, isRegistering }) {
  return (
    <div className='page-class'>
      <aside style={asideStyle}>
        {isRegistering ? (
          <>
            <GetMyPastes mypastes={mypastes} setmyPastes={setmyPastes} />
          </>
        ) : (
          <></>
        )}
        <GetPublicPastes pastes={pastes} setPastes={setPastes} />
      </aside>
      <h5>Tools & Applications</h5>
      <hr></hr>
    </div>
  );
}

const asideStyle = {
  width: '25%',
  paddingLeft: '25px',
  marginLeft: '25px',
  float: 'right',
};

export default Tools;
