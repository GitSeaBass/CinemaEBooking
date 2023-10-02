import './ConfirmationWindow.css'
import { useNavigate } from 'react-router-dom';

function ConfirmationWindow() { 
    const navigate = useNavigate();

    function goHome() {
        navigate('/')
    }

    return (
        <div className="confirm-window">
            <h2>You're Account Has Been Created!</h2>
            <br></br>
            <h2>An Email Confirmation has been sent to you're email</h2>
            <br></br>
            <button className='returnhomebutton' onClick={goHome}>Return To Home Page</button>
        </div>
    )
}

export default ConfirmationWindow;