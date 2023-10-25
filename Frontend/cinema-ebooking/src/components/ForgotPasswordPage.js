import './ForgotPasswordPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = useState('')
    const addEnteredEmail = (e) => {
        setEnteredEmail(e.target.value)
    }

    const [validEmail, setValidEmail] = useState(false)

    const [newPass, setNewPass] = useState('')
    const addNewPass = (e) => {
        setNewPass(e.target.value)
    }
    const [confirmPass, setConfirmPass] = useState('')
    const addConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validEmail === false) {
            setValidEmail(true)
        } else if (validEmail === true) {
            if (newPass === confirmPass) {
                alert("Should work")
            } else {
                alert("Password Do Not Match")
            }
        }
    }

    return (
        <div className='forgot-page'>
            <div className='forgot-window'>
                <h1>Reset Password</h1>
                <form className='forgot-form' onSubmit={onSubmit}>
                    {!validEmail &&
                        <>
                            <label>Enter Your Email</label> <br/>
                            <input className='forgot-input' placeholder='Email' onChange={addEnteredEmail} required></input><br/>
                        </>
                    }
                    {validEmail && 
                        <>
                            <input className='forgot-input-locked' placeholder='Email' onChange={addEnteredEmail} value={enteredEmail} disabled required></input><br/>
                            <label>Enter New Password</label> <br/>
                            <input className='forgot-input' placeholder='New Password' onChange={addNewPass} type='password' required></input>
                            <input className='forgot-input' placeholder='Confirm New Password' onChange={addConfirmPass} type='password' required></input> <br/>
                        </>
                    }
                    <input className='forgot-submit' type='submit' value='Submit'></input>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;