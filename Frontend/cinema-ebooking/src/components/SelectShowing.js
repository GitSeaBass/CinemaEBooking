import './SelectShowing.css'
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';

function SelectShowing(props) {
    const navigate = useNavigate();
    
    const dates = ['01/01/2024', '01/02/2024', '01/03/2024']
    
    function pickDate(e) {
        props.setSelectedDate(e)
    }

    function confirmDate() {
        navigate('/times')
    }

    return (
        <>
        <NavBar user={props.user} setUser={props.setUser}/>
        <div className='showingcontainer'>
            <h3 className='showingtitle'>Select A Date</h3>
            {dates.map((item) => (
                <button className='datebutton' onClick={pickDate(item)}>{item}</button>
            ))}
            <br/>
            <button className='confirmbutton' onClick={confirmDate}>Confirm</button>
        </div>
        </>
    )
}

export default SelectShowing;