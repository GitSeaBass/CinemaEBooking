import './Movie.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Movie(props) {
    const navigate = useNavigate()

    function grabTickets() {

        navigate('/showings')
    }

    return (
        <>
            <div className='Movie-container'>
                <button className='Movie-get-tickets-button' onClick={grabTickets}>Get Tickets</button>
            </div>
        </>
    )
}

export default Movie