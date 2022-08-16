import React from 'react';
import './page.css';
import GetMyPastes from './GetMyPastes.js';
import GetPublicPastes from './GetPublicPastes.js';

function Api({
  mypastes,
  setmyPastes,
  pastes,
  setPastes,
  isRegistering,
}) {

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
      <h5>Developers API</h5>
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

const pageStyle = {
  paddingLeft: '70px',
  marginLeft: '70px',
  border: '1px solid black',
};

export default Api;
