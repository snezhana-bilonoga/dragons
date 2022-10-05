import { Link } from 'react-router-dom';
import Form from './Form';
import { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from './redux/actions';
import './Auth.css'


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div className='login-block'>
            <h1>Login</h1>
            <Form  title="sign in"
            handleClick={handleLogin} />
            <p>
                Or <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default Login;