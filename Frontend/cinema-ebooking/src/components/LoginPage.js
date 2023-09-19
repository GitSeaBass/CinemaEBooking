import './LoginPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    function onSubmit() {
        props.setUser(email);
        navigate('/');
    }

    return(
        <div className='login-container'>
            <div className='login-title'>Login</div>
            <div className="form-container">
                <form className='login-form' onSubmit={onSubmit}>
                    <label>Email</label><br/>
                    <input type='text' onChange={addEmail} required></input><br/>
                    <label>Password</label><br/>
                    <input type='password' required></input><br/>
                    <input type='submit' className='submit'></input>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;