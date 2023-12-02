import './SelectSeats.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from './NavBar';
import SelectSeatGraphic from './SelectSeatGraphic';

function SelectSeats(props) {
    const location = useLocation()

    const navigate = useNavigate()

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
    function subtractChild() {
        setTimeout(() => {
            if (child <= 0) {
                setChild(0)
            } else {
                setChild(child - 1)
            }
        }, 100)
    }
    function addChild() {
        setTimeout(() => {
            setChild(child + 1)
        }, 100)
    }

    const [adult, setAdult] = useState(0);
    function subtractAdult() {
        setTimeout(() => {
            if (adult <= 0) {
                setAdult(0)
            } else {
                setAdult(adult - 1)
            }
        }, 100)
    }
    function addAdult() {
        setTimeout(() => {
            setAdult(adult + 1)
        }, 100)
    }

    const [senior, setSenior] = useState(0);
    function subtractSenior() {
        setTimeout(() => {
            if (senior <= 0) {
                setSenior(0)
            } else {
                setSenior(senior - 1)
            }
        }, 100)
    }
    function addSenior() {
        setTimeout(() => {
            setSenior(senior + 1)
        }, 100)
    }

    function confirm() {
        props.setChildTickets(child)
        props.setAdultTickets(adult)
        props.setSeniorTickets(senior)
        navigate('/checkout', { state: location.state })
    }

    const roomNum = 1

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='SelectSeats-seats-container'>
                <h1 className='SelectSeats-movie-title'>{location.state.movie.title}</h1>
                <h1 className="SelectSeats-select-tickets">Select Number of Tickets</h1>
                <div className='SelectSeats-border-container'>
                    <div className='SelectSeats-tickets-container'>
                        <div className='SelectSeats-ticket-type-container'>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                subtractChild()
                            }}>-</button>
                            <div className='SelectSeats-ticket-type'>
                                <h3>Child ($5.00): {child}</h3>
                            </div>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                addChild()
                            }}>+</button>
                        </div>
                        <div className='SelectSeats-ticket-type-container'>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                subtractAdult()
                            }}>-</button>
                            <div className='SelectSeats-ticket-type'>
                                <h3>Adult ($10.00): {adult}</h3>
                            </div>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                addAdult()
                            }}>+</button>
                        </div>
                        <div className='SelectSeats-ticket-type-container'>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                subtractSenior()
                            }}>-</button>
                            <div className='SelectSeats-ticket-type'>
                                <h3>Senior ($7.50): {senior}</h3>
                            </div>
                            <button type='button' className='SelectSeats-add-minus-button' onClick={() => {
                                addSenior()
                            }}>+</button>
                        </div>
                    </div>
                </div>

                <h3 className="SelectSeats-seat-title">Select Seats:</h3>
                <div className='SelectSeats-seat-button-container'>
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
                    {/*}{seats.map((item) => (
                        item.status === 'open' ? <button className='seat'>{item.seat}</button> : <button className='seat' disabled>{item.seat}</button>
                    ))}{*/}

                    <SelectSeatGraphic seatsToChoose={adult + child + senior}/>

                </div>
                <br></br>
                <button className="SelectSeats-confirm-button" onClick={confirm}>Confirm Selection</button>
            </div>
        </>
    )
}

export default SelectSeats;