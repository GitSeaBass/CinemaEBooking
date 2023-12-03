import { useNavigate } from "react-router-dom";
import './EmailConfirmPage.css'

function EmailConfirmPage() {
    const navigate = useNavigate()
    
    function onClick() {
        navigate('/login')
    }
    
    return (
        <>
            <div className="confirmed-container">
                <div className="confirm-text">
                    You Have Confirmed Your Email
                </div>
                <button className="return-login-button" onClick={onClick}>Return to Login Page</button>
            </div>
        </>
    )
}

export default EmailConfirmPage;