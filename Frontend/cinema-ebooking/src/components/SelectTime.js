import { useNavigate } from "react-router-dom";

function SelectTime() {
    const navigate = useNavigate();
    
    const times = ['7:30AM', '9:00AM', '2:00PM']
    
    function onClick() {
        navigate('/seatselect')
    }

    return (
        
        <div>
            <h3>Select A Time</h3>
            {times.map((item) => (
                <button onClick={onClick}>{item}</button>
            ))}
        </div>
    )
}

export default SelectTime;