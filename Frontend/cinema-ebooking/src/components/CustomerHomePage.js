import './CustomerHomePage.css'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createElement } from 'react';

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

    function showTrailer(movie_trailer, movie_title) {
        const container = document.createElement('div')
        container.setAttribute('id', 'CustomerHomePage-trailer-container')
        container.addEventListener('onClick', () => {
            hideTrailer()
        })

        const trailer = document.createElement('iframe')
        trailer.setAttribute('src', movie_trailer)
        trailer.setAttribute('title', movie_title)
        trailer.setAttribute('id', 'CustomerHomePage-trailer')
        trailer.addEventListener('onMouseOut', () => {
            hideTrailer()
        })

        container.appendChild(trailer)
        document.body.appendChild(container)
    }

    function hideTrailer() {
        try {
            const container = document.querySelector('CustomerHomePage-trailer-container')
            const trailer = document.querySelector('CustomerHomePage-trailer')
            container.removeChild(trailer)
            container.remove()
        } catch (error) {
            console.log('Could not find element(s)')
        }
    }

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
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onMouseEnter={() => {
                                showTrailer(item.trailer_url, item.title)
                            }} onClick={() => {
                                checkMovie(item)
                            }} />
                            <div>{item.title}</div>
                            <p>{item.mpaa_rating}</p>
                            <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                                grabTickets(item)
                            }}>Get Tickets</button>
                        </div>
                        <div className='CustomerHomePage-right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className='CustomerHomePage-trailer' />
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
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onMouseEnter={() => {
                                showTrailer(item.trailer_url, item.title)
                            }} onClick={() => {
                                checkMovie(item)
                            }} />
                            <div>{item.title}</div>
                            <p>{item.mpaa_rating}</p>
                            <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                                grabTickets(item)
                            }}>Get Tickets</button>
                        </div>
                        <div className='CustomerHomePage-right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className='CustomerHomePage-trailer' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;