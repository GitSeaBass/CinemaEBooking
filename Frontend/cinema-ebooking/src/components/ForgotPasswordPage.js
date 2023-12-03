import './ForgotPasswordPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = useState('')
    const addEnteredEmail = (e) => {
        setEnteredEmail(e.target.value)
    }

    const [user, setUser] = useState()
    const addUser = async () => {
        const temp = await fetchUser()
        setUser(temp)
        setValidEmail(true)
    }

    const fetchUser = async () => {
        const result = await fetch(`http://localhost:8080/system/getuser?email=${enteredEmail}`)
        const resultInJson = await result.json()
        return resultInJson
    }

    const changePass = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        await fetch("http://localhost:8080/system/updateProfile", requestOptions)
    }
    
    const [confirmPass, setConfirmPass] = useState('')
    const addConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }

    const changeUserPass = (e) => {
        setUser({
            ...user, password: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user.password)
        console.log(confirmPass)
        if (user.password === confirmPass) {
            await changePass()
            await alert("Password Successfully Changed")
            console.log(user)
            //await navigate('/')
        } else {
            alert("Password Do Not Match")
        }
    }

    const [validEmail, setValidEmail] = useState(false)

    const returnHome = () => {
        navigate('/')
    }
    return (
        <div className='ForgotPasswordPage-forgot-page'>
            <div className='ForgotPasswordPage-forgot-window'>
                <h1>Reset Password</h1>

                {!validEmail &&
                <>
                <form className='ForgotPasswordPage-forgot-form'>
                    <label>Enter Your Email</label> <br />
                    <input className='ForgotPasswordPage-forgot-input' placeholder='Email' onChange={addEnteredEmail} required></input><br />
                </form>
                <button onClick={addUser}>Submit Email</button>
                </>
                }


                {validEmail &&
                <>
                <form> 
                    <>
                        {/*}<input className='ForgotPasswordPage-forgot-input-locked' placeholder='Email' onChange={addEnteredEmail} value={enteredEmail} readOnly disabled required></input><br />
                        <label>Enter New Password</label> <br /> {*/}
                        <input className='ForgotPasswordPage-forgot-input' placeholder='New Password' name='password' onChange={changeUserPass} type='password' required></input>
                        <input className='ForgotPasswordPage-forgot-input' placeholder='Confirm New Password' onChange={addConfirmPass} type='password' required></input> <br />
                    </>
                </form>
                <button onClick={onSubmit}>Submit Password Change</button>
                </>
                }
                
                
                <h4>
                    Or <button className='ForgotPasswordPage-cancel' onClick={returnHome}> Cancel</button> and Return Home
                </h4>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;