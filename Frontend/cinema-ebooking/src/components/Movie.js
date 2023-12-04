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
                        <p>{location.state.movie.mpaa_rating}</p>
                        <p>{location.state.movie.category}</p>
                        <button className='Movie-get-tickets-button' onClick={grabTickets}>Get Tickets</button>
                        <img src={location.state.movie.poster_url} className='Movie-poster'></img>
                    </div>
                    <div className='Movie-right'>
                        <p>{location.state.movie.synopsis}</p>
                        <p className='Movie-people'>Cast: {location.state.movie.cast}</p>
                        <p className='Movie-people'>Directed by: {location.state.movie.director}</p>
                        <p className='Movie-people'>Produced by: {location.state.movie.producer}</p>
                    </div>
                    <p>{location.state.movie.reviews}</p>
                </div>
            </div>
        </>
    )
}

export default Movie