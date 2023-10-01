import './ConfirmationWindow.css'
import { useNavigate } from 'react-router-dom';

function ConfirmationWindow() { 
    const navigate = useNavigate();

    function goHome() {
        navigate('/')
    }

    return (
        <div className="confirm-window">
            <b2>You're Account Has Been Created!</b2>
            <br></br>
            <b2>An Email Confirmation has been sent to you're email</b2>
            <br></br>
                <button className='' onClick={goHome}>Return To Home Page</button>
        </div>
    )
}

export default ConfirmationWindow;