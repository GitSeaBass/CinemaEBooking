import { useLocation, useNavigate } from "react-router-dom";
import './Bookings.css'

function Bookings() {
    const location = useLocation()
    const navigate = useNavigate()

    function returnHome() {
        navigate('/')
    }

    return (
        <div className="bookings">
        <h1>Your Bookings</h1>
        <button className='bookings-home-button' onClick={returnHome}>Return Home</button>
        {location.state.bookings.map((book) => (
            <>
            <div className="book-container">
                <h3>{book.movieTitle} on {book.showDate} at {book.showTime}</h3>
            </div>
            <div>
                <div>Total Cost: {book.total}</div>
                <div>Number of Adult Tickets: {book.numAdultTickets}</div>
                <div>Number of Child Tickets: {book.numChildTickets}</div>
                <div>Number of Senior Tickets: {book.numSeniorTickets}</div>
                <div>Seats: {book.seatSelections}</div>
            </div>
            </>
        ))

        }
        </div>
    )
}

export default Bookings;