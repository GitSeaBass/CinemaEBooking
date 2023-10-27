import './ForgotPasswordPage.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage(props) {
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

    useEffect(() => {
        console.log(props.user)
        if (props.user !== '') {
            setEnteredEmail(props.user)
            setValidEmail(true)
        }
    }, [props.user])

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

    const returnHome = () => {
        navigate('/')
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
                            <input className='forgot-input-locked' placeholder='Email' onChange={addEnteredEmail} value={enteredEmail} readOnly disabled required></input><br/>
                            <label>Enter New Password</label> <br/>
                            <input className='forgot-input' placeholder='New Password' onChange={addNewPass} type='password' required></input>
                            <input className='forgot-input' placeholder='Confirm New Password' onChange={addConfirmPass} type='password' required></input> <br/>
                        </>
                    }
                    <input className='forgot-submit' type='submit' value='Submit'></input>
                </form>
                <h4>
                    Or <button className='cancel' onClick={returnHome}> Cancel</button> and Return Home
                </h4>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;