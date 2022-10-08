import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRocketToFavorite, getRockets, removeFromFavorite } from '../redux/actions';
import { Link, Navigate } from 'react-router-dom';
import Header from './Header';
import './RocketsList.css';

function RocketsList () {
  const user = useSelector(state => state.auth);
  const rockets = useSelector(state => state.rockets.rockets);
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const favoriteButton = rocket => {
    if (favorites.some(favorite => favorite.id === rocket.id)) {
      return (
        <button onClick={() => dispatch(removeFromFavorite(rocket))} className='favorite'>
          ★
        </button>
      );
    }

    return (
      <button onClick={() => dispatch(addRocketToFavorite(rocket))} className='not-favorite'>
        ☆
      </button>
    );
  };

  return user.id ? (
    <>
      <Header />
      <div className='rocket-list'>
        {rockets.map(rocket => (
          <div key={rocket.id} className='rocket-item'>
            <div>
              {favoriteButton(rocket)}
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
    </>
  ) : (
    <Navigate to='/login' />
  );
}

export default RocketsList;
