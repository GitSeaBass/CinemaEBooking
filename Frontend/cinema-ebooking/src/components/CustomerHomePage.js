import './CustomerHomePage.css'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CustomerHomePage(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/system/all`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                console.log(movies)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    function checkMovie() {
        navigate('/movie')
    }
    function grabTickets() {

        navigate('/showings')
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={movies} />

            <div className='currently-running-title'>
                Now Playing
            </div>

            <div className='movie-display'>
                {movies.filter((item) => item.category === 'Now Showing').map((item) => (
                    <div className='movie-card' key={item.id}>
                        <div className='left-movie'>
                            <img src={item.poster_url} alt={item.title} className='poster' onClick={checkMovie} />
                            <div>{item.title}</div>
                            <div>MPAA: {item.mpaa_rating}</div>
                            <button onClick={grabTickets}>Get Tickets</button>
                        </div>
                        <div className='right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className="trailer" />
                        </div>
                    </div>
                ))}
            </div>

            <div className='currently-running-title'>
                Coming Soon
            </div>

            <div className='movie-display'>
                {movies.filter((item) => item.category === 'Coming Soon').map((item) => (
                    <div className='movie-card' key={item.id}>
                        <div className='left-movie'>
                            <img src={item.poster_url} alt={item.title} className='poster' onClick={checkMovie} />
                            <div>{item.title}</div>
                            <div>MPAA: {item.mpaa_rating}</div>
                            <button className='CustomerHomePage-get-tickets-button' onClick={grabTickets}>Get Tickets</button>
                        </div>
                        <div className='right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className="trailer" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;