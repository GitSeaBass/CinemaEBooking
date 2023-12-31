import './SelectTime.css'
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './NavBar';

function SelectTime(props) {
    const location = useLocation()

    const navigate = useNavigate()

    const times = ['7:30AM', '9:00AM', '2:00PM']
    const movietimes = [location.state.movie.show_time]

    function pickTime(item) {
        props.setSelectedTime(item)
    }

    function confirm() {
        navigate('/seatselect', { state: location.state })
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='SelectTime-time-container'>
                <h3 className='SelectTime-time-title'>Select A Time</h3>
                {movietimes.map((item) => (
                    <button className='SelectTime-time-button' onClick={() => {
                        pickTime(item)
                    }}>{item}</button>
                ))}
                <br />
                <button className='SelectTime-confirm-button' onClick={confirm}>Confirm</button>
            </div>
        </>
    )
}

export default SelectTime;