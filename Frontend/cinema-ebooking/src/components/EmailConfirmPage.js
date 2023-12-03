import { useNavigate, useParams } from "react-router-dom";
import './EmailConfirmPage.css'

function EmailConfirmPage() {
    const navigate = useNavigate()
    
    const { id } = useParams();

    async function onClick() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };

        const result = await fetch(`http://localhost:8080/confirm/${id}`, requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)

        
        //navigate('/login')
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