import { useState, useEffect } from "react"
import './SelectSeatGraphic.css'

function SelectSeatGraphic(props) {
    const [seats,setSeats] = useState([
    {
        available: 'open',
        no: '1'
    },
    {
        available: 'open',
        no: '2'
    },
    {
        available: 'taken',
        no: '3'
    },
    {
        available: 'open',
        no: '4'
    },
    {
        available: 'open',
        no: '5'
    },
    {
        available: 'open',
        no: '6'
    },
    {
        available: 'open',
        no: '7'
    },
    {
        available: 'open',
        no: '8'
    },
    {
        available: 'taken',
        no: '9'
    },
    {
        available: 'open',
        no: '10'
    },
    {
        available: 'taken',
        no: '11'
    },
    {
        available: 'open',
        no: '12'
    },
    {
        available: 'taken',
        no: '13'
    },
    {
        available: 'open',
        no: '14'
    },
    {
        available: 'open',
        no: '15'
    },
    {
        available: 'taken',
        no: '16'
    }])

    const [seatsToChoose, setSeatsToChoose] = useState(props.seatsToChoose)
    const [seatsSelected, setSeatsSelected] = useState(0)

    useEffect(() => {
        setSeatsToChoose(props.seatsToChoose)
    })

    function onClick(index) {
        addSelectedSeats(index)

        const seperatedSeats = selectedSeats.join(",")

        props.setSelectedSeats(seperatedSeats)
        
        const newSeats = seats.map((seat) => {
            if (seat.no === index) {
                const totalSeats = parseInt(seatsToChoose) - parseInt(seatsSelected)
                if (totalSeats > 0 && seat.available === 'open') {
                    seat.available = 'selected'
                    setSeatsSelected(seatsSelected + 1)
                    return seat
                } else if (seat.available === 'selected') {
                    seat.available = 'open'
                    setSeatsSelected(seatsSelected - 1)
                    return seat
                } else {
                    return seat
                }
            } else {
                return seat
            }
        })
        setSeats(newSeats)
    }
    
    const [selectedSeats, setSelectedSeats] = useState([])
    const addSelectedSeats = (seatno) => {
        if (selectedSeats.indexOf(seatno) === -1) {
            selectedSeats.push(seatno)
        } else {
            const temp = selectedSeats.filter((seat) => seat !== seatno)
            setSelectedSeats(temp)
        }
    }

    return ( 
        <>
        <div className="screen-div"> Screen </div>
        <div className="seat-container">
        {seats.map((seat) => {
            if (seat.available === 'open')
                return (
                    <div className="seat available-seat" id={seat.no}  key={seat.no} onClick={() => {
                        onClick(seat.no)
                    }}>{seat.no}</div>
                )
            else if (seat.available === 'selected')
                return (
                    <div className="seat selected-seat" id={seat.no}  key={seat.no} onClick={() => {
                        onClick(seat.no)
                    }}>{seat.no}</div>
                )
            else
                return (
                    <div className="seat taken-seat" key={seat.no}>{seat.no}</div>
                )
        })}
        </div>

        <div className="remaining-seats-container">
            <h3>Seats Left to Choose: </h3>
            
            {parseInt(seatsToChoose) - parseInt(seatsSelected) < 0?  
                <div className="seats-error">
                Please Unselect {Math.abs(parseInt(seatsToChoose) - parseInt(seatsSelected))} Seats
                </div>
                :
                <div className="seats-remaining">
                    {parseInt(seatsToChoose) - parseInt(seatsSelected)}
                </div>
            }
        </div>

        {/*}<div className="seat-button-div">
            <button className="submit-seat-button">
                Submit Seat Selection
            </button>
        </div>{*/}
        </>
    )
}

export default SelectSeatGraphic