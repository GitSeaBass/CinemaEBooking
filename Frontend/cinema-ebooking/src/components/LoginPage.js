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
            const result = await fetch(`http://localhost:8080/system/getuser?email=${email}`)

            const resultinJSON = await result.json();
            console.log(resultinJSON[0])


            //const foundUser = props.updatableUsers.find((user) => user.email === email)

            if (resultinJSON[0].password === password) {
                if (resultinJSON[0].status === 'INACTIVE') {
                    navigate('/confirmwindow')
                } else {
                    props.setUser(email);
                    props.setStatus(resultinJSON[0].status)
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

                <div className='LoginPage-image-container'>
                    {/* Potential Image}<img src='https://t3.ftcdn.net/jpg/00/47/40/02/360_F_47400213_AgAsGC2y45UJaYQoWmNc3pb3BtG1agta.jpg' alt='login' className='image'/>{*/}
                    <div className='LoginPage-image'></div>
                </div>

                <div className="LoginPage-login-form-container">
                    <div className='LoginPage-login-title'>Login</div>

                    <h4 className='LoginPage-create-account-question'>
                        Don't have an account? Create one <a className='LoginPage-create-account-link' href='/createaccount'>here</a>.
                    </h4>


                    <form className='LoginPage-login-form' onSubmit={onSubmit}>
                        <input type='text' className='LoginPage-login-input' placeholder='Email' onChange={addEmail} required></input><br />
                        <input type='password' className='LoginPage-login-input' placeholder='Password' onChange={addPassword} required></input><br />
                        <input type='submit' value='Login' className='LoginPage-login-submit'></input>
                    </form>

                    <h4 className='LoginPage-create-account-question'>
                        <a className='LoginPage-create-account-link' href='/forgotpassword'>Forgot your password?</a>
                        <p>Return <a className='LoginPage-create-account-link' href='/'>Home</a></p>
                    </h4>
                </div>
            </div>
        </>
    );
}

export default LoginPage;