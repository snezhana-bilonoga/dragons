import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spin from './components/Spin';
import RocketsList from './components/RocketsList';
import Rocket from './components/Rocket';
import Login from './components/Login';
import Registration from './components/Register';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import './App.css';

function App () {
  return (
    <div className='App' width='device-width'>
      <Spin />
      <Router>
        <Routes>
          <Route path='/' element={<RocketsList />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<Registration />} exact />
          <Route path='/profile' element={<Profile />} exact />
          <Route path='/rocket/:id' element={<Rocket />} exect />
          <Route path='/favorites' element={<Favorites />} exect />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
