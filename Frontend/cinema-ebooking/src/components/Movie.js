import './Movie.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Movie() {
    const location = useLocation();

    const navigate = useNavigate()

    function grabTickets() {

        navigate('/showings')
    }

    return (
        <>
            <div className='Movie-container'>
                <div className='Movie-left'>
                    <img src={location.state.poster} className='Movie-movie-poster' />
                    <button className='Movie-get-tickets-button' onClick={grabTickets}>Get Tickets</button>
                </div>
            </div>
        </>
    )
}

export default Movie