import './SelectShowing.css'
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './NavBar';

function SelectShowing(props) {
    const location = useLocation()

    const navigate = useNavigate()

    const dates = ['01/01/2024', '01/02/2024', '01/03/2024']

    function pickDate(e) {
        props.setSelectedDate(e)
    }

    function confirmDate() {
        navigate('/times', { state: location.state })
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='SelectShowing-showing-container'>
                <h1 className='SelectShowing-movie-title'>{location.state.movie.title}</h1>
                <h1 className='SelectShowing-select-showing'>Select Showing</h1>
                <div className='SelectShowing-date-container'>
                    {dates.map((item) => (
                        <button className='SelectShowing-date-button' onClick={() => {
                            pickDate(item)
                        }}>{item}</button>
                    ))}
                </div>
                <button className='SelectShowing-confirm-button' onClick={confirmDate}>Confirm</button>
            </div>
        </>
    )
}

export default SelectShowing;