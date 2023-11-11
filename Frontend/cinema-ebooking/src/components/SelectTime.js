import './SelectTime.css'
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';

function SelectTime(props) {
    const navigate = useNavigate();

    const times = ['7:30AM', '9:00AM', '2:00PM']

    function onClick(item) {
        props.setSelectedTime(item)
    }

    function confirm() {
        navigate('/seatselect')
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='SelectTime-time-container'>
                <h3 className='SelectTime-time-title'>Select A Time</h3>
                {times.map((item) => (
                    <button className='SelectTime-time-button' onClick={onClick(item)}>{item}</button>
                ))}
                <br />
                <button className='SelectTime-confirm-button' onClick={confirm}>Confirm</button>
            </div>
        </>
    )
}

export default SelectTime;