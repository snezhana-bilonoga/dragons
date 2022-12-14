import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavorites, removeUser } from '../redux/actions';
import './Header.css';

function Header () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlgeLogout() {
    dispatch(removeUser());
    dispatch(removeFavorites());
    navigate('/');
  }

  return (
    <>
      <header className='header'>
        <button onClick={() => navigate('/')} className='home'>
          Home
        </button>
        <button onClick={() => navigate('/profile')} className='profile'>
          My Profile
        </button>
        <button onClick={() => navigate('/favorites')} className='favorite'>
          Favorites
        </button>
        <button className='log-out' onClick={handlgeLogout}>
          Log Out
        </button>
      </header>
      <hr />
    </>
  );
}
export default Header;
