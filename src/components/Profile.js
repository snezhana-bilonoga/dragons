import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { setUser } from '../redux/actions';
import Header from './Header';
import './Profile.css';

function Profile () {
  const user = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEdit = async (name, email, password) => {
    try {
      const auth = getAuth();
      const newUser = { ...user };

      if (name) {
        await updateProfile(auth.currentUser, { displayName: name });
        newUser.name = name;
      }

      if (email) {
        await updateEmail(auth.currentUser, email);
        newUser.email = email;
      }

      if (password) {
        await updatePassword(auth.currentUser, password);
      }

      dispatch(setUser(newUser));

      setName('');
      setEmail('');
      setPassword('');

      alert('User info is updated.');
    } catch (error) {
      alert(error);
    }
  };

  return user.email ? (
    <>
      <Header />
      <div>
        <div className='profile-page'>
          <div className='my-profile'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Last Sign In Time: {user.lastSignInTime}</p>
            <p>Creation Time: {user.creationTime}</p>
          </div>
          <div className='edit-profile'>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              placeholder='Name'
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              placeholder='Email'
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
            <button onClick={() => handleEdit(name, email, password)}>Change</button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to='/login' />
  );
}

export default Profile;
