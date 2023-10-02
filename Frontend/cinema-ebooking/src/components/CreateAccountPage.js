import './CreateAccountPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage(props) {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    const[password1, setPassword1] = useState('')
    const addPassword1 = (e) => {
        setPassword1(e.target.value);
    };

    const[password2, setPassword2] = useState('')
    const addPassword2 = (e) => {
        setPassword2(e.target.value);
    };

    function onSubmit() {
        if(password1 === password2) {
            props.setUser(email);
            navigate('/');
        } else {
            alert('Passwords Do NOT Match!')
        }
    }
    
    return (
        <div className='login-container'>
            <div className='create-title'>Create Account</div>
            <div className="create-form-container">
                <form className='create-form' onSubmit={onSubmit}>
                    <label>Email</label><br/>
                    <input type='text' className='create-input' onChange={addEmail} required></input><br/>
                    <label>Password</label><br/>
                    <input type='password' className='create-input' onChange={addPassword1} required></input><br/>
                    <label>Confirm Password</label><br/>
                    <input type='password' className='create-input' onChange={addPassword2} required></input><br/>
                    <input type='submit' className='create-submit'></input>
                </form>
            </div>
            <h4 className='create-account-question'>Already Have an Account?</h4>
            <br></br>
            <a className='create-account-link' href='/login'>Login Here</a>
        </div>
    )
}

export default CreateAccountPage;