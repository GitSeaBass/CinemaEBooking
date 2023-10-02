import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SelectSeats() {
    const navigate = useNavigate();
    
    const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4']
    
    const[number, setNumber] = useState(0);
    const addNumber = (e) => {
        setNumber(e.target.value)
    }

    function confirm() {
        navigate('/checkout')
    }

    return (
        
        <div>
            <form>
                <label>Number of Seats: </label>
                <input type="number" min="1" max="10" onChange={addNumber}></input>
            </form>

            {seats.map((item) => (
                <button>{item}</button>
            ))}
            <br></br>
            <button onClick={confirm}>CONFIRM SELECTION</button>
        </div>
    )
}

export default SelectSeats;