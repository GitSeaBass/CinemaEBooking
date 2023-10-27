import './ViewProfile.css'
import { useNavigate } from 'react-router-dom'

function ViewProfile(props) {
    const navigate = useNavigate()
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    const returnHome = () => {
        navigate('/')
    }

    const resetPass = () => {
        navigate('/forgotpassword')
    }
    
    return (
        <>
            <div className='profile-header'>
                <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png' alt='avatar'/>
                <div className='profile-info'>
                    <h1 className='email'>{props.user}</h1>
                </div>
            </div>
            <div className='edit-profile-container'>
                <h3>Account Info</h3>
                <hr/>
                <form className='edit-form' onSubmit={onSubmit}>
                    <div className='edit-div'>
                        <label>Email</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label className='password-label'>Password</label>
                        <button onClick={resetPass}>Reset Password</button>
                    </div>

                    <div className='edit-div'>
                        <label>Street</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label>City</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label>State</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label>Zipcode</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label>Card Number</label>
                        <input></input><br/>
                    </div>
                    <div className='edit-div'>
                        <label>Expiration Date</label>
                        <input></input><br/>
                    </div>

                    <input className='save-changes-button' type='submit' value='Save Changes'></input>
                    <button className='save-changes-button' type='submit' onClick={returnHome}>Return Home</button>
                </form>
            </div>
        </>
    )
}

export default ViewProfile;