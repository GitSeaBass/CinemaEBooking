import './LoginPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    function onSubmit() {
        props.setUser(email);
        navigate('/');
    }

    return(
        <div className="form-container">
            <form className='login-form' onSubmit={onSubmit}>
                <label>Email</label><br/>
                <input type='text' onChange={addEmail}></input><br/>
                <label>Password</label><br/>
                <input type='text'></input><br/>
                <input type='submit'></input>
            </form>
        </div>
    );
}

export default LoginPage;