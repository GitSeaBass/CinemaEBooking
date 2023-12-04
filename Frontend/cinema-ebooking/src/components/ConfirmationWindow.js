import './ConfirmationWindow.css'
import { useNavigate } from 'react-router-dom';

function ConfirmationWindow() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/login')
    }

    return (
        <div className="ConfirmationWindow-confirm-container">
            <div className='ConfirmationWindow-message-container'>
                <div className='ConfirmationWindow-messages'>
                    <h3>Your account has been created.</h3>
                    <h3>A verification email has been sent to the provided email.</h3>
                    <h3>Your account must be verified before you can log in.</h3>
                </div>
                <button className='ConfirmationWindow-return-button' onClick={goHome}>Return to Login Page</button>
            </div>
        </div>
    )
}

export default ConfirmationWindow;