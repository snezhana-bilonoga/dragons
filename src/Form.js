import {useState} from 'react';
import './Form.css';

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className='form'>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
            />
             <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="phone"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
            />
            <button
                onClick={() => handleClick(email, pass, name, phoneNumber)}
            >
                {title}
            </button>
        </div>
    )
}

export default Form;