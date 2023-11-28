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
        <div className='CreateAccountPage-create-container'>

            <div className='CreateAccountPage-image-container'>
                <div className='CreateAccountPage-image'> </div>
            </div>

            <div className="CreateAccountPage-create-form-container">

                <div className='CreateAccountPage-create-title'>Create Account</div>

                <h4 className='CreateAccountPage-log-in'>Already have an account? <a className='CreateAccountPage-log-in-link' href='/login'>Log in here.</a></h4>

                <form className='CreateAccountPage-create-form' onSubmit={onSubmit}>
                    <input type='text' className='CreateAccountPage-create-input' name='email' onChange={addNewUser} placeholder='Email' required></input><br />
                    <input type='password' className='CreateAccountPage-create-input' name='password' onChange={addNewUser} placeholder='Password' required></input><br />
                    <input type='password' className='CreateAccountPage-create-input' onChange={addPassword2} placeholder='Confirm Password' required></input><br />

                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-create-name' placeholder='First Name' name='firstName' onChange={addNewUser} required></input>
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-create-name' placeholder='Last Name' name='lastName' onChange={addNewUser} required></input> <br />

                    <label className='CreateAccountPage-create-label'>Enter Date of Birth</label> <br />
                    <input type='text' className='CreateAccountPage-create-input' placeholder='MM/DD/YYYY' name='dateOfBirth' onChange={addNewUser} required></input> <br />

                    {/*}
                    <label className='create-label' value='Address'>Enter Address (Optional) </label><br />
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-address-input' placeholder='Street' name='street' onChange={addNewUser}></input>
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-address-input' placeholder='City' name='city' onChange={addNewUser}></input><br />
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-address-input' placeholder='State' name='state' onChange={addNewUser}></input>
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-address-input' placeholder='Zipcode' name='zip' onChange={addNewUser}></input><br />

                    <label className='CreateAccountPage-create-label' value='Address'>Enter Payment Card (Optional) </label><br />
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-card-input CreateAccountPage-card-number' placeholder='Card Number' name='cardno' onChange={addNewUser}></input>
                    <input type='text' className='CreateAccountPage-create-input CreateAccountPage-card-input' placeholder='Expiration Date' name='carddate' onChange={addNewUser}></input><br />

                    <br />
                    <input type='checkbox' className='CreateAccountPage-create-checkbox' name='promo' onChange={addPromoState}></input>Register for Promotions<br />
    {*/}
                    <input type='submit' value='Create Account' className='CreateAccountPage-create-submit'></input>
                </form>


                <h4 className='CreateAccountPage-return-home'>Return <a className='CreateAccountPage-return-home-link' href='/'>Home</a></h4>


            </div>

        </div>
    )
}

export default CreateAccountPage;