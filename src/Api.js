import React from 'react';
import './style/page.css';
import List from './paste/List.js';
import View from './paste/View.js';

function Api({ mypastes, setmyPastes, pastes, setPastes, isRegistering }) {
  return (
    <div className='page-class'>
      <aside style={asideStyle}>
        {isRegistering ? (
          <>
            <List mypastes={mypastes} setmyPastes={setmyPastes} />
          </>
        ) : (
          <></>
        )}
        <View pastes={pastes} setPastes={setPastes} />
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
