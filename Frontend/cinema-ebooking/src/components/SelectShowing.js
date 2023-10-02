import { useNavigate } from "react-router-dom";

function SelectShowing() {
    const navigate = useNavigate();
    
    const dates = ['01/01/2024', '01/02/2024', '01/03/2024']
    
    function selectedTime() {
        navigate('/times')
    }

    return (
        
        <div>
            <h3>Select A Date</h3>
            {dates.map((item) => (
                <button onClick={selectedTime}>{item}</button>
            ))}
        </div>
    )
}

export default SelectShowing;