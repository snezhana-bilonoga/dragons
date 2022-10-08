import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { removeFromFavorite } from '../redux/actions';
import Header from './Header';
import './RocketsList.css';

function Favorites () {
  const user = useSelector(state => state.auth);
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return user.id ? (
    favorites.length > 0 ? (
      <div>
        <Header />
        <div className='rocket-list'>
          {favorites.map(rocket => (
            <div key={rocket.id} className='rocket-item'>
              <div>
                <button onClick={() => dispatch(removeFromFavorite(rocket))} className='favorite'>
                  ★
                </button>
                <h2>{rocket.name}</h2>
              </div>
              <img src={rocket.flickr_images[0]} alt='rocket'></img>
              <button className='details'>
                <Link to={`/rocket/${rocket.id}`} state={rocket}>
                  More Details
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <Header />
        <div className='no-favorites'>
          <h1> No favorites</h1>
        </div>
      </div>
    )
  ) : (
    <Navigate to='/login' />
  );
}

export default Favorites;
