import React from 'react';
import './page.css';
import GetMyPastes from './GetMyPastes.js';
import GetPublicPastes from './GetPublicPastes.js';

function Faq({ mypastes, setmyPastes, pastes, setPastes, isRegistering }) {
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
      <h5>FAQ [Frequently Asked Questions]</h5>
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

export default Faq;
