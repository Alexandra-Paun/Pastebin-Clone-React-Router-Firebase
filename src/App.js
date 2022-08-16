import React from 'react';
import Tools from './Pages/Tools';
import Homepage from './Pages/Homepage';
import Faq from './Pages/Faq';
import MyPastes from './Pages/MyPastes';
import PublicPastes from './Pages/PublicPastes';
import { useState } from 'react';
import Paste from './Pages/Paste';
import Api from './Pages/Api';
import './App.css';
import Nav from './Nav';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [pastes, setPastes] = useState([]);
  const [mypastes, setmyPastes] = useState([]);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div>
      <Router>
        <Nav
          isRegistering={isRegistering}
          setIsRegistering={setIsRegistering}
        />
        <Routes>
          <Route
            path='/'
            element={
              <Paste
                mypastes={mypastes}
                setmyPastes={setmyPastes}
                pastes={pastes}
                setPastes={setPastes}
                isRegistering={isRegistering}
              />
            }
          />
          <Route
            path='/mypastes'
            element={<MyPastes mypastes={mypastes} setmyPastes={setmyPastes} />}
          />
          <Route
            path='/publicpastes'
            element={<PublicPastes pastes={pastes} setPastes={setPastes} />}
          />
          <Route
            path='/api'
            element={
              <Api
                mypastes={mypastes}
                setmyPastes={setmyPastes}
                pastes={pastes}
                setPastes={setPastes}
                isRegistering={isRegistering}
              />
            }
          />
          <Route
            path='/tools'
            element={
              <Tools
                mypastes={mypastes}
                setmyPastes={setmyPastes}
                pastes={pastes}
                setPastes={setPastes}
                isRegistering={isRegistering}
              />
            }
          />
          <Route
            path='/faq'
            element={
              <Faq
                mypastes={mypastes}
                setmyPastes={setmyPastes}
                pastes={pastes}
                setPastes={setPastes}
                isRegistering={isRegistering}
              />
            }
          />
          <Route
            path='homepage'
            element={<Homepage isRegistering={isRegistering} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
