import './CreateAccountPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage(props) {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        status: "INACTIVE",
        email: "",
        password: "",
        /*street: "",
        city: "",
        state: "",
        zip: "",
        cardno: "",
        carddate: "",
        promo: false*/
    })
    const addNewUser = (e) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value, /*promo: promoState*/
        })
    }

    /*const [promoState, setPromoState] = useState(false)
    const addPromoState = () => {
        setPromoState(!promoState)
    }*/

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
        console.log(newUser)

        const result = await fetch("http://localhost:8080/system/createaccount", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)

    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (newUser.email.indexOf('@') === -1) {
            alert('Please Enter a Valid Email')
        } else if (newUser.password === password2) {
            //props.addUpdatableUsers(newUser.email, newUser.password)
            createAccount()
            //props.setUser(email);
            navigate('/confirmwindow');
        } else {
            alert('Passwords Do NOT Match!')
        }
    }

    return (
        <div className='ConfirmationWindow-create-container'>

            <div className='ConfirmationWindow-image-container'>
                <div className='ConfirmationWindow-image'> </div>
            </div>

            <div className="ConfirmationWindow-create-form-container">

                <div className='ConfirmationWindow-create-title'>Create Account</div>

                <h4 className='ConfirmationWindow-create-account-question'>Already Have an Account?
                    <a className='ConfirmationWindow-create-account-link' href='/login'>Login Here</a>
                </h4>

                <form className='ConfirmationWindow-create-form' onSubmit={onSubmit}>
                    <input type='text' className='ConfirmationWindow-create-input' name='email' onChange={addNewUser} placeholder='Email' required></input><br />
                    <input type='password' className='ConfirmationWindow-create-input' name='password' onChange={addNewUser} placeholder='Password' required></input><br />
                    <input type='password' className='ConfirmationWindow-create-input' onChange={addPassword2} placeholder='Confirm Password' required></input><br />

                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-create-name' placeholder='First Name' name='firstName' onChange={addNewUser} required></input>
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-create-name' placeholder='Last Name' name='lastName' onChange={addNewUser} required></input> <br />

                    <label className='ConfirmationWindow-create-label'>Enter Date of Birth</label> <br />
                    <input type='text' className='ConfirmationWindow-create-input' placeholder='MM/DD/YYYY' name='dateOfBirth' onChange={addNewUser} required></input> <br />

                    {/*}
                    <label className='create-label' value='Address'>Enter Address (Optional) </label><br />
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-address-input' placeholder='Street' name='street' onChange={addNewUser}></input>
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-address-input' placeholder='City' name='city' onChange={addNewUser}></input><br />
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-address-input' placeholder='State' name='state' onChange={addNewUser}></input>
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-address-input' placeholder='Zipcode' name='zip' onChange={addNewUser}></input><br />

                    <label className='ConfirmationWindow-create-label' value='Address'>Enter Payment Card (Optional) </label><br />
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-card-input ConfirmationWindow-card-number' placeholder='Card Number' name='cardno' onChange={addNewUser}></input>
                    <input type='text' className='ConfirmationWindow-create-input ConfirmationWindow-card-input' placeholder='Expiration Date' name='carddate' onChange={addNewUser}></input><br />

                    <br />
                    <input type='checkbox' className='ConfirmationWindow-create-checkbox' name='promo' onChange={addPromoState}></input>Register for Promotions<br />
    {*/}
                    <input type='submit' value='Create Account' className='ConfirmationWindow-create-submit'></input>
                </form>


                <h4 className='ConfirmationWindow-create-account-question'>Return
                    <a className='ConfirmationWindow-create-account-link' href='/'>Home</a>
                </h4>


            </div>

        </div>
    )
}

export default CreateAccountPage;