import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SelectSeats(props) {
    const navigate = useNavigate();
    
    const seats = [
        {
            seat: '1',
            status: 'open'
        },
        {
            seat: '2',
            status: 'open'
        },
        {
            seat: '3',
            status: 'open'
        },
        {
            seat: '4',
            status: 'open'
        },
        {
            seat: '5',
            status: 'taken'
        },
        {
            seat: '6',
            status: 'open'
        },
        {
            seat: '7',
            status: 'open'
        },
        {
            seat: '8',
            status: 'open'
        },
    ]
    
    const[child, setChild] = useState(0);
    const addChild = e => {
        setChild(e.target.value)
    }
    const[adult, setAdult] = useState(0);
    const addAdult = e => {
        setAdult(e.target.value)
    }
    const[senior, setSenior] = useState(0);
    const addSenior = e => {
        setSenior(e.target.value)
    }

    function confirm() {
        let price = 5 * parseInt(child) + 10 * parseInt(adult) + 7.5 * parseInt(senior)
        props.setTicketPrice(price)
        navigate('/checkout')
    }

    return (
        
        <div>
            <h1>Select Seats</h1>
            <form>
                <label>Child($5.00): </label>
                <input type="number" min="0" max="3" onChange={addChild}></input>
                <br></br>
                <label>Adult($10.00): </label>
                <input type="number" min="0" max="3" onChange={addAdult}></input>
                <br></br>
                <label>Senior($7.50): </label>
                <input type="number" min="0" max="3" onChange={addSenior}></input>
            </form>

            <h3>Seats:</h3>
            {seats.map((item) => (
                item.status === 'open' ? <button>{item.seat}</button>:<button disabled>{item.seat}</button> 
            ))}
            <br></br>
            <button onClick={confirm}>Confirm Selection of Tickets</button>
        </div>
    )
}

export default SelectSeats;