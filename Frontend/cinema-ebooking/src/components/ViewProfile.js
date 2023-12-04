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

    // not usable rn, just here to remember to implement in future
    const [promoStatus, setPromoStatus] = useState()
    const addPromoStatus = () => {
        setCurrentUser({
            ...currentUser
        })
        setPromoStatus()
    }

    const [receivePromo, setReceivePromo] = useState(0)

    const getUser = async () => {
        try {
            const result = await fetch(`http://localhost:8080/system/getuser?email=${props.user}`)
            const resultinJSON = await result.json();
            
            await setCurrentUser(resultinJSON)
            await setReceivePromo(resultinJSON.wantsPromotions)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        if (currentUser === '') {
            getUser()
            console.log(currentUser)
        }

        //setCurrentUser(
        //props.updatableUsers.find((item) => item.email === props.user)
        //)
    }, [currentUser])

    const onSubmit = async (e) => {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        };

        const result = await fetch("http://localhost:8080/system/updateProfile", requestOptions)
        const resultinJSON = await result.json();
        console.log(resultinJSON)
        console.log(receivePromo)
        //navigate('/')
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

    async function viewbook() {
        const result = await fetch(`http://localhost:8080/system/customerbookings?customerEmail=${currentUser.email}`)
            const resultinJSON = await result.json();
            
            await setCurrentUser(resultinJSON)
    }

    return (
        <>
            <div className='ViewProfile-profile-header'>
                <img className='ViewProfile-avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png' alt='avatar' />
                <div className='ViewProfile-profile-info'>
                    <h1 className='email'>{props.user}</h1>
                </div>
            </div>
            <div className='ViewProfile-edit-profile-container'>
                <h3>Account Info</h3>
                <hr />
                <form className='ViewProfile-edit-form' onSubmit={onSubmit}>
                    <div className='ViewProfile-edit-div'>
                        <label>Email</label>
                        <input value={currentUser.email} disabled></input><br />
                    </div>

                    <div className='ViewProfile-edit-div'>
                        <label>First Name</label>
                        <input value={currentUser.firstName} name='firstName' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='ViewProfile-edit-div'>
                        <label>Last Name</label>
                        <input value={currentUser.lastName} name='lastName' onChange={addCurrentUser}></input><br />
                    </div>
                    <div className='ViewProfile-edit-div'>
                        <label>Date of Birth</label>
                        <input value={currentUser.dateOfBirth} name='dateOfBirth' onChange={addCurrentUser}></input><br />
                    </div>

                    <div className='ViewProfile-edit-div'>
                        <label className='ViewProfile-password-label'>Password</label>
                        <button className='ViewProfile-reset-button' onClick={resetPass}>Reset Password</button>
                    </div>

                    {currentUser.wantsPromotions === 0 &&
                    <div className='ViewProfile-promo-box'>
                        <input type='checkbox' className='CreateAccountPage-create-checkbox' name='promo'></input>Receive Promotions<br />
                    </div>}
                    {currentUser.wantsPromotions === 1 &&
                    <div className='ViewProfile-promo-box'>
                        <input type='checkbox' checked={true} className='CreateAccountPage-create-checkbox' name='promo'></input>Receive Promotions<br />
                    </div>}


                    {currentUser.address !== null &&
                        <>
                            <div className='ViewProfile-edit-div'>
                                <label>Street</label>
                                <input value={currentUser.street} name='street' onChange={addCurrentUser}></input><br />
                            </div>
                            <div className='ViewProfile-edit-div'>
                                <label>City</label>
                                <input value={currentUser.city} name='city' onChange={addCurrentUser}></input><br />
                            </div>
                            <div className='ViewProfile-edit-div'>
                                <label>State</label>
                                <input value={currentUser.state} name='state' onChange={addCurrentUser}></input><br />
                            </div>
                            <div className='ViewProfile-edit-div'>
                                <label>Zipcode</label>
                                <input value={currentUser.zip} name='zip' onChange={addCurrentUser}></input><br />
                            </div>
                        </>
                    }
                    {false &&
                        <>
                            <div className='ViewProfile-edit-div'>
                                <label>Card Number</label>
                                <input value={currentUser.cardno} name='cardno' onChange={addCurrentUser}></input><br />
                            </div>
                            <div className='ViewProfile-edit-div'>
                                <label>Card Expiration Date</label>
                                <input value={currentUser.carddate} name='carddate' onChange={addCurrentUser}></input><br />
                            </div>
                            <div>
                                <button className='ViewProfile-add-card-button' type='submit' onClick={addClick}>Add a Card</button>
                            </div>
                            {promoStatus === true &&
                                <div className='ViewProfile-edit-div'>
                                    <label>Recieve Promos</label>
                                    <input className='ViewProfile-promo-box' type='checkbox' checked value={currentUser.carddate} onChange={addPromoStatus}></input><br />
                                </div>
                            }
                            {promoStatus === false &&
                                <div className='ViewProfile-edit-div'>
                                    <label>Recieve Promos</label>
                                    <input className='ViewProfile-promo-box' type='checkbox' value={currentUser.carddate} onChange={addPromoStatus}></input><br />
                                </div>
                            }
                        </>
                    }
                    <button className='ViewProfile-save-changes-button' type='submit' onClick={onSubmit}>Save Changes</button>
                    <button className='ViewProfile-save-changes-button' type='submit' onClick={returnHome}>Return Home</button>
                </form>
            </div>

            <button onClick={viewbook}>View Bookings</button>



            {
                view === 1 &&
                <div></div>
            }
        </>
    )
}

export default ViewProfile;