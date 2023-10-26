import './CreateAccountPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage(props) {
    const navigate = useNavigate();

    const[email, setEmail] = useState('')
    const addEmail = (e) => {
        setEmail(e.target.value);
    };

    const[password1, setPassword1] = useState('')
    const addPassword1 = (e) => {
        setPassword1(e.target.value);
    };

    const[password2, setPassword2] = useState('')
    const addPassword2 = (e) => {
        setPassword2(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(password1 === password2) {
            props.addUpdatableUsers(email, password1)      
            //props.setUser(email);
            navigate('/confirmwindow');
        } else {
            alert('Passwords Do NOT Match!')
        }
    }
    
    return (
        <div className='create-container'>

                <div className='image-container'>
                    <div className='image'> Temporary Color Background</div>
                </div>

            <div className="create-form-container">

                <div className='create-title'>Create Account</div>

                <h4 className='create-account-question'>Already Have an Account?
                    <a className='create-account-link' href='/login'>Login Here</a>
                </h4>

                <form className='create-form' onSubmit={onSubmit}>
                    <input type='text' className='create-input' onChange={addEmail} placeholder='Email' required></input><br/>
                    <input type='password' className='create-input' onChange={addPassword1} placeholder='Password' required></input><br/>
                    <input type='password' className='create-input' onChange={addPassword2} placeholder='Confirm Password' required></input><br/>
                    <input type='checkbox' className='create-checkbox'></input>Register for Promotions<br/>
                    <input type='submit' value='Create Account' className='create-submit'></input>
                </form>
                
                
                <h4 className='create-account-question'>Return
                    <a className='create-account-link' href='/'>Home</a>
                </h4>
                
            
            </div>
            
        </div>
    )
}

export default CreateAccountPage;