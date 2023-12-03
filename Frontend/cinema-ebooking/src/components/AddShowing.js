import './AddShowing.css'
import NavBar from './NavBar.js'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react'

function AddShowing(props) {
    const location = useLocation()

    const [roomNumber, setRoomNumber] = useState()
    const [showdate, setShowdate] = useState()
    const [showtime, setShowtime] = useState()

    const data = {
        'roomNumber': roomNumber,
        'showdate': showdate,
        'showtime': showtime
    }

    const navigate = useNavigate()

    function submitShowing() {
        navigate('/admin')
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='AddShowing-form-container'>
                <form className='AddShowing-form'>
                    <h3>Enter Information:</h3>
                    <label>Room number:
                        <input type='text' required onChange={(event) => {
                            setRoomNumber(event.target.value)
                        }}></input>
                    </label>
                    <label>Show date:
                        <input type='text' required onChange={(event) => {
                            setShowdate(event.target.value)
                        }}></input>
                    </label>
                    <label>Show time:
                        <input type='text' required onChange={(event) => {
                            setShowtime(event.target.value)
                        }}></input>
                    </label>
                </form>
                <button className='AddShowing-add-button' type='submit' onClick={() => {
                    submitShowing()
                }}>Add</button>
            </div>
        </>
    )
}

export default AddShowing