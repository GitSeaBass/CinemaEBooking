import './ConfirmationWindow.css'
import { useNavigate } from 'react-router-dom';

function ConfirmationWindow() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/login')
    }

    return (
        <div className="confirm-window">
            <div className='message-window'>
                <h2>Your Account Has Been Created!</h2>
                <br></br>
                <h2>A verification email has been sent to the provided email.</h2>
                <h2>Your account must be verified before you can log in.</h2>
                <br></br>
                <button className='returnbutton' onClick={goHome}>Return To Login Page</button>
            </div>
        </div>
    )
}

export default ConfirmationWindow;