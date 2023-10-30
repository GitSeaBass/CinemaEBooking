import './CreateAccountPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage(props) {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        status: "INACTIVE",
        email: "",
        password: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        cardno: "",
        carddate: "",
        promo: false
    })
    const addNewUser = (e) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value, promo: promoState
        })
    }

    const [promoState, setPromoState] = useState(false)
    const addPromoState = () => {
        setPromoState(!promoState)
    }

    const [password2, setPassword2] = useState('')
    const addPassword2 = (e) => {
        setPassword2(e.target.value);
    };

    const createAccount = async () => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        };

        const result = await fetch("http://localhost:8080/system/add", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (newUser.email.indexOf('@') === -1) {
            alert('Please Enter a Valid Email')
        } else if (newUser.password === password2) {
            props.addUpdatableUsers(newUser.email, newUser.password)

            //props.setUser(email);
            navigate('/confirmwindow');
        } else {
            alert('Passwords Do NOT Match!')
        }
    }

    return (
        <div className='create-container'>

            <div className='image-container'>
                <div className='image'> </div>
            </div>

            <div className="create-form-container">

                <div className='create-title'>Create Account</div>

                <h4 className='create-account-question'>Already Have an Account?
                    <a className='create-account-link' href='/login'>Login Here</a>
                </h4>

                <form className='create-form' onSubmit={onSubmit}>
                    <input type='text' className='create-input' name='email' onChange={addNewUser} placeholder='Email' required></input><br />
                    <input type='password' className='create-input' name='password' onChange={addNewUser} placeholder='Password' required></input><br />
                    <input type='password' className='create-input' onChange={addPassword2} placeholder='Confirm Password' required></input><br />

                    <input type='text' className='create-input create-name' placeholder='First Name' name='firstname' onChange={addNewUser} required></input>
                    <input type='text' className='create-input create-name' placeholder='Last Name' name='lastname' onChange={addNewUser} required></input> <br />

                    <label className='create-label'>Enter Date of Birth</label> <br />
                    <input type='text' className='create-input' placeholder='MM/DD/YYYY' name='dob' onChange={addNewUser} required></input> <br />

                    <label className='create-label' value='Address'>Enter Address (Optional) </label><br />
                    <input type='text' className='create-input address-input' placeholder='Street' name='street' onChange={addNewUser}></input>
                    <input type='text' className='create-input address-input' placeholder='City' name='city' onChange={addNewUser}></input><br />
                    <input type='text' className='create-input address-input' placeholder='State' name='state' onChange={addNewUser}></input>
                    <input type='text' className='create-input address-input' placeholder='Zipcode' name='zip' onChange={addNewUser}></input><br />

                    <label className='create-label' value='Address'>Enter Payment Card (Optional) </label><br />
                    <input type='text' className='create-input card-input card-number' placeholder='Card Number' name='cardno' onChange={addNewUser}></input>
                    <input type='text' className='create-input card-input' placeholder='Expiration Date' name='carddate' onChange={addNewUser}></input><br />

                    <br />
                    <input type='checkbox' className='create-checkbox' name='promo' onChange={addPromoState}></input>Register for Promotions<br />
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