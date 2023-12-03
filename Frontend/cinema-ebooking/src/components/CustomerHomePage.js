import './CustomerHomePage.css'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createElement } from 'react';

function CustomerHomePage(props) {

    let timeoutId = null

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/system/all`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    function showTrailer(movie_trailer, movie_title) {
        timeoutId = setTimeout(() => {
            const container = document.createElement('div')
            container.setAttribute('id', 'CustomerHomePage-trailer-container')

            const exit = document.createElement('button')
            exit.innerHTML = 'X'
            exit.setAttribute('id', 'CustomerHomePage-trailer-exit')
            exit.addEventListener('click', () => {
                hideTrailer()
            })

            const trailer = document.createElement('iframe')
            trailer.setAttribute('src', movie_trailer)
            trailer.setAttribute('title', movie_title)
            trailer.setAttribute('id', 'CustomerHomePage-trailer')

            container.appendChild(exit)
            container.appendChild(trailer)
            document.body.appendChild(container)
        }, 3000)
    }

    function hideTrailer() {
        try {
            const container = document.getElementById('CustomerHomePage-trailer-container')

            setTimeout(() => {
                container.remove()
            }, 100)
        } catch (error) {
            console.log('Could not find element.')
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
                <h2>Now Playing</h2>
            </div>

            <div className='CustomerHomePage-movie-display'>
                {movies.filter((item) => item.category === 'Now Showing').map((item) => (
                    <div className='CustomerHomePage-movie'>
                        <div className='CustomerHomePage-movie-card' key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onMouseEnter={() => {
                                showTrailer(item.trailer_url, item.title)
                            }} onMouseLeave={() => {
                                clearTimeout(timeoutId)
                            }} onClick={() => {
                                clearTimeout(timeoutId)
                                checkMovie(item)
                            }} />
                            <p>{item.mpaa_rating}</p>
                        </div>
                        <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                            grabTickets(item)
                        }}>Get Tickets</button>
                    </div>
                ))}
            </div>

            <div className='CustomerHomePage-currently-running-title'>
                <h2>Coming Soon</h2>
            </div>

            <div className='CustomerHomePage-movie-display'>
                {movies.filter((item) => item.category === 'Coming Soon').map((item) => (
                    <div className='CustomerHomePage-movie'>
                        <div className='CustomerHomePage-movie-card' key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.poster_url} alt={item.title} className='CustomerHomePage-poster' onMouseEnter={() => {
                                showTrailer(item.trailer_url, item.title)
                            }} onMouseLeave={() => {
                                clearTimeout(timeoutId)
                            }} onClick={() => {
                                clearTimeout(timeoutId)
                                checkMovie(item)
                            }} />
                            <p>{item.mpaa_rating}</p>
                        </div>
                        <button className='CustomerHomePage-get-tickets-button' onClick={() => {
                            grabTickets(item)
                        }}>Get Tickets</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;