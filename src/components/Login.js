import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/actions';
import './Form.css';

function Login () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          lastSignInTime: user.metadata.lastSignInTime,
          creationTime: user.metadata.creationTime,
          id: user.uid,
          token: user.accessToken,
        }),
      );
      navigate('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='login-block'>
      <h1>Login</h1>
      <div className='form'>
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
        <button onClick={() => handleLogin(email, pass)}>Sign In</button>
      </div>
      <p>
        Or <Link to='/register'>Register</Link>
      </p>
    </div>
  );
}

export default Login;
