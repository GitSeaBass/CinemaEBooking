import { useNavigate } from "react-router-dom";

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
        
        <div>
            <h3>Select A Time</h3>
            {times.map((item) => (
                <button onClick={onClick(item)}>{item}</button>
            ))}
            <br/>
            <button onClick={confirm}>Confirm</button>
        </div>
    )
}

export default SelectTime;