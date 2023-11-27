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

    function checkMovie(movie) {
        navigate('/movie', { state: { movie: movie } })
    }
    function grabTickets(movie) {

        navigate('/showings', { state: { movie: movie } })
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={movies} />

            <div className='CustomerHomePage-currently-running-title'>
                Now Playing
            </div>

            <div className='CustomerHomePage-movie-display'>
                {movies.filter((item) => item.category === 'Now Showing').map((item) => (
                    <div className='CustomerHomePage-movie-card' key={item.id}>
                        <div className='CustomerHomePage-left-movie'>
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onClick={() => {
                                checkMovie(item)
                            }} />
                            <div>{item.title}</div>
                            <p>{item.mpaa_rating}</p>
                            <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                                grabTickets(item)
                            }}>Get Tickets</button>
                        </div>
                        <div className='CustomerHomePage-right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className="CustomerHomePage-trailer" />
                        </div>
                    </div>
                ))}
            </div>

            <div className='CustomerHomePage-currently-running-title'>
                Coming Soon
            </div>

            <div className='CustomerHomePage-movie-display'>
                {movies.filter((item) => item.category === 'Coming Soon').map((item) => (
                    <div className='CustomerHomePage-movie-card' key={item.id}>
                        <div className='CustomerHomePage-left-movie'>
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onClick={() => {
                                checkMovie(item)
                            }} />
                            <div>{item.title}</div>
                            <p>{item.mpaa_rating}</p>
                            <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                                grabTickets(item)
                            }}>Get Tickets</button>
                        </div>
                        <div className='CustomerHomePage-right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className="CustomerHomePage-trailer" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;