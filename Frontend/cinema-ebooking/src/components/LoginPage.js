import './LoginPage.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('')
    const addPassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(email)

        try {
            const result = await fetch(`http://localhost:8080/system/login?email=${email}&password=${password}`)

            const resultinJSON = await result.json();
            console.log(resultinJSON)


            //const foundUser = props.updatableUsers.find((user) => user.email === email)

            if (resultinJSON.email === email) {
                if (resultinJSON.status === 'INACTIVE') {
                    navigate('/confirmwindow')
                } else {
                    props.setUser(email);
                    props.setStatus(resultinJSON.status)
                    navigate('/');
                }
            } else {
                alert("Email or Password is Incorrect")
            }

        } catch (error) {
            alert("Email or Password is Incorrect")
        }
    }

    return (
        <>
            <div className='LoginPage-login-container'>
                <div className='LoginPage-gradient-1'></div>
                <div className='LoginPage-login-form-container'>
                    <div className='LoginPage-login-title'>
                        <h2>Log in</h2>
                    </div>
                    <p className='LoginPage-create-account-question'>
                        Don't have an account? Create one <a className='LoginPage-link LoginPage-create-account-link' href='/createaccount'>here</a>.
                    </p>
                    <form className='LoginPage-login-form' onSubmit={onSubmit}>
                        <input type='text' placeholder='Email' onChange={addEmail} required></input>
                        <input type='password' placeholder='Password' onChange={addPassword} required></input>
                        <button type='submit' className='LoginPage-login-button'>Log in</button>
                    </form>
                    <p className='LoginPage-forgot-password'>
                        <a className='LoginPage-link LoginPage-forgot-password-link' href='/forgotpassword'>Forgot your password?</a>
                    </p>
                    <p className='LoginPage-return-home'>
                        Return <a className='LoginPage-link LoginPage-return-home-link' href='/'>home</a>
                    </p>
                </div>
                {/*<div className='LoginPage-image-container'>
                    {Potential Image}<img src='https://t3.ftcdn.net/jpg/00/47/40/02/360_F_47400213_AgAsGC2y45UJaYQoWmNc3pb3BtG1agta.jpg' alt='login' className='image'/>{}
                    <div className='LoginPage-image'></div>
                </div> */}
            </div>
        </>
    );
}

export default LoginPage;