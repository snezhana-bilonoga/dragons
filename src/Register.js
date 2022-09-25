import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import Form from './Form';
import {setUser} from './redux/actions';
import './Auth.css';

const Registration = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const handleRegister = async (email, password, displayName, phoneNumber) => {
        const auth = getAuth();

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName, phoneNumber });

            dispatch(setUser({
                name: displayName,
                phone: phoneNumber,
                email: user.email,
                token: user.accessToken,
                id: user.uid,
            }));

            navigation('/');

        } catch (error) {
            console.log(error);
        }
    }

        return (
            <div className='register-block'>
                <h1>Registration</h1>
                <Form  title="register" handleClick={handleRegister} />
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>   
                </p>            
            </div>
        )
}

export default Registration;