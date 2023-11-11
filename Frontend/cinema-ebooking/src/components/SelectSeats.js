import './SelectSeats.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './NavBar';

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
            status: 'open'
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

    const [child, setChild] = useState(0);
    const addChild = e => {
        setChild(e.target.value)
    }
    const [adult, setAdult] = useState(0);
    const addAdult = e => {
        setAdult(e.target.value)
    }
    const [senior, setSenior] = useState(0);
    const addSenior = e => {
        setSenior(e.target.value)
    }

    function confirm() {
        props.setChildTickets(child)
        props.setAdultTickets(adult)
        props.setSeniorTickets(senior)
        navigate('/checkout')
    }

    const roomNum = 1

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='seatcontainer'>
                <h1 className="seattitle">Select Number of Tickets</h1>
                <form className="seatform">
                    <label>Child ($5.00): </label>
                    <input type="number" min="0" max="3" onChange={addChild}></input>
                    <br></br>
                    <label>Adult ($10.00): </label>
                    <input type="number" min="0" max="3" onChange={addAdult}></input>
                    <br></br>
                    <label>Senior ($7.50): </label>
                    <input type="number" min="0" max="3" onChange={addSenior}></input>
                </form>

                <h3 className="seattitle">Select Seats:</h3>
                <div className='seatbuttoncontainer'>
                    {props.rooms.filter((room) => room.number === roomNum).map((room) => {

                        for (let i = 0; i < room.numRows; i++) {
                            <div className='SelectSeats-seat-row'>
                                {(() => {
                                    for (let j = 0; j < room.numSeats / room.numRows; i++) {
                                        <div className='SelectSeats-seat'>{8 - j}</div>
                                    }
                                })}
                            </div>
                        }
                    })}
                    {seats.map((item) => (
                        item.status === 'open' ? <button className='seat'>{item.seat}</button> : <button className='seat' disabled>{item.seat}</button>
                    ))}
                </div>
                <br></br>
                <button className="confirmbutton" onClick={confirm}>Confirm Selection</button>
            </div>
        </>
    )
}

export default SelectSeats;