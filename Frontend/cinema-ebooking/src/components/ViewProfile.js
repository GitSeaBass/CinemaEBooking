import './ViewProfile.css'
import AddCard from './AddCard.js'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ViewProfile(props) {
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState('')
    const addCurrentUser = (e) => {
        setCurrentUser({
            ...currentUser, [e.target.name]: e.target.value, promo: promoStatus
        })
        console.log(currentUser)
    }

    const [promoStatus, setPromoStatus] = useState(props.updatableUsers.find((item) => item.email === props.user).promo)
    const addPromoStatus = () => {
        setCurrentUser({
            ...currentUser, promo: !promoStatus
        })
        setPromoStatus(!promoStatus)
    }

    useEffect(() => {
        setCurrentUser(
            props.updatableUsers.find((item) => item.email === props.user)
        )
    }, [props.user, props.updatableUsers])

    const onSubmit = (e) => {
        e.preventDefault()
        props.updateUpdatableUsers(currentUser)
        console.log(currentUser)
        navigate('/')
    }

    const returnHome = () => {
        navigate('/')
    }

    const resetPass = () => {
        navigate('/forgotpassword')
    }

    const [view, setView] = useState(0)

    function addClick() {
        if (view === 0) {
            setView(1)
        } else if (view === 1) {
            setView(0)
        }


    }

    return (
        <>
            <div className='profile-header'>
                <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png' alt='avatar' />
                <div className='profile-info'>
                    <h1 className='email'>{props.user}</h1>
                </div>
            </div>
            <div className='edit-profile-container'>
                <h3>Account Info</h3>
                <hr />
                <form className='edit-form' onSubmit={onSubmit}>
                    <div className='edit-div'>
                        <label>Email</label>
                        <input value={currentUser.email} disabled></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>First Name</label>
                        <input value={currentUser.firstname} name='firstname' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>Last Name</label>
                        <input value={currentUser.lastname} name='lastname' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>Date of Birth</label>
                        <input value={currentUser.dob} name='dob' onChange={addCurrentUser}></input><br />
                    </div>

                    <div className='edit-div'>
                        <label className='password-label'>Password</label>
                        <button className='reset-button' onClick={resetPass}>Reset Password</button>
                    </div>

                    <div className='edit-div'>
                        <label>Street</label>
                        <input value={currentUser.street} name='street' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>City</label>
                        <input value={currentUser.city} name='city' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>State</label>
                        <input value={currentUser.state} name='state' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>Zipcode</label>
                        <input value={currentUser.zip} name='zip' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>Card Number</label>
                        <input value={currentUser.cardno} name='cardno' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='edit-div'>
                        <label>Card Expiration Date</label>
                        <input value={currentUser.carddate} name='carddate' onChange={addCurrentUser}></input><br />
                    </div>
                    <div>
                        <button className='add-card-button' type='button' onClick={addClick}>Add a Card</button>
                    </div>
                    {promoStatus === true &&
                        <div className='edit-div'>
                            <label>Recieve Promos</label>
                            <input className='promo-box' type='checkbox' checked value={currentUser.carddate} onChange={addPromoStatus}></input><br />
                        </div>
                    }
                    {promoStatus === false &&
                        <div className='edit-div'>
                            <label>Recieve Promos</label>
                            <input className='promo-box' type='checkbox' value={currentUser.carddate} onChange={addPromoStatus}></input><br />
                        </div>
                    }

                    <button className='save-changes-button' type='submit' onClick={onSubmit}>Save Changes</button>
                    <button className='save-changes-button' type='submit' onClick={returnHome}>Return Home</button>
                </form>
            </div>

            {
                view === 1 &&
                <AddCard props />
            }
        </>
    )
}

export default ViewProfile;