import './LoginPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    const[password, setPassword] = useState('')
    const addPassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(props.updatableUsers)
        const foundUser = props.updatableUsers.find((user) => user.email === email)
        if (foundUser != null) {
            if (foundUser.password === password) {
                props.setUser(email);
                props.setStatus(foundUser.status)
                navigate('/');
            } else {
                alert("Email or Password is Incorrect")
            }
        } else {
            alert("Email or Password is Incorrect")
        }
    }

    return(
        <>
            <div className='login-container'>

                <div className='image-container'>
                    {/* Potential Image}<img src='https://t3.ftcdn.net/jpg/00/47/40/02/360_F_47400213_AgAsGC2y45UJaYQoWmNc3pb3BtG1agta.jpg' alt='login' className='image'/>{*/}
                    <div className='image'> Temporary Color Background</div>
                </div>

                <div className="login-form-container">
                    <div className='login-title'>Login</div>
                        
                    <h4 className='create-account-question'>Don't Have an Account?
                        <a className='create-account-link' href='/createaccount'>Create One Here</a>
                    </h4>
                    

                    <form className='login-form' onSubmit={onSubmit}>
                        <input type='text' className='login-input' placeholder='Email' onChange={addEmail} required></input><br/>
                        <input type='password' className='login-input' placeholder='Password' onChange={addPassword} required></input><br/>
                        <input type='submit' value='Login' className='login-submit'></input>
                    </form>

                    <h4 className='create-account-question'>
                        <a className='create-account-link' href='/'>Forgot Your Password? </a>
                        <br/>
                        <br/>
                        Return
                        <a className='create-account-link' href='/'>Home</a>
                    </h4>
                </div>
            </div>
        </>
    );
}

export default LoginPage;