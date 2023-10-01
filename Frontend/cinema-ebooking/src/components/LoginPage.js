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
            <div className="login-form-container">
                <form className='login-form' onSubmit={onSubmit}>
                    <label>Email</label><br/>
                    <input type='text' className='login-input'  onChange={addEmail} required></input><br/>
                    <label>Password</label><br/>
                    <input type='password' className='login-input'  required></input><br/>
                    <input type='submit' className='login-submit'></input>
                </form>
            </div>
            <b6 className='create-account-question'>Don't Have an Account?</b6>
            <br></br>
            <a className='create-account-link' href='/createaccount'>Create one Here</a>
        </div>
    );
}

export default LoginPage;