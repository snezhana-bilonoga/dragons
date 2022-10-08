import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from '../redux/actions';
import './Auth.css';

const Registration = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (email, password, displayName) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });

      dispatch(
        setUser({
          name: displayName,
          email: user.email,
          lastSignInTime: user.metadata.lastSignInTime,
          creationTime: user.metadata.creationTime,
          token: user.accessToken,
          id: user.uid,
        }),
      );

      navigation('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='register-block'>
      <h1>Registration</h1>
      <div className='form'>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type='password'
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder='Password'
        />
        <button onClick={() => handleRegister(email, pass, name)}>Sign In</button>
      </div>
      <p>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  );
};

export default Registration;
