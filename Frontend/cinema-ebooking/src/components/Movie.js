import './Movie.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Movie() {
    const location = useLocation()

    const navigate = useNavigate()

    function grabTickets() {
        navigate('/showings', { state: location.state })
    }

    return (
        <>
            <div className='Movie-container'>
                <iframe src={location.state.movie.trailer_url} title={location.state.movie.title} className="Movie-trailer" />
                <div className='Movie-information-container'>
                    <div className='Movie-left'>
                        <img src={location.state.movie.poster_url} className='Movie-movie-poster' />
                        <button className='Movie-get-tickets-button' onClick={grabTickets}>Get Tickets</button>
                    </div>
                    <div className='Movie-right'>
                        <p>{location.state.movie.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie