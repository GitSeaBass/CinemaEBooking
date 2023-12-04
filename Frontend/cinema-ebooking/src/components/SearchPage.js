import './SearchPage.css'
import NavBar from './NavBar';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchPage(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [poster, setPoster] = useState([]);
    const [trailer, setTrailer] = useState([]);

    const [full, setFull] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/system/search?title=${id}`)
            .then(res => res.json())
            .then(data => {
                setFull(data[0])
                setMovie(data[0].title)
                setPoster(data[0].poster_url)
                setTrailer(data[0].trailer_url)
                props.setSelectedMovie(data[0].title)
                console.log(movie)
            }).catch(err => {
                console.log(err)
            })
    }, [id, movie, props])

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

    function book(movie) {
        console.log(movie)
        navigate('/showings', { state: { movie: movie } })
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            {typeof full != 'undefined' &&
                <div className="SearchPage-movie-container">
                    {movie}
                    <img className='SearchPage-search-poster' src={poster} alt={movie} />
                    <iframe className='SearchPage-search-trailer' src={trailer} title={movie} />
                    <button className="SearchPage-book-button" onClick={
                        book(movie)
                    }>BOOK MOVIE</button>
                </div>
            }
            {typeof full == 'undefined' &&
                <div className='SearchPage-not-found'>
                    <p>No movie was found.</p>
                </div>
            }
            {movies.filter((item) => item.category === id).map((item) => (
                <div className="SearchPage-movie-container">
                    {item.title}
                    <img className='SearchPage-search-poster' src={item.poster_url} alt={item.title} />
                    <iframe className='SearchPage-search-trailer' src={item.trailer_url} title={item.title} />
                    <button className="SearchPage-book-button" onClick={
                        book(item)
                    }>BOOK MOVIE</button>
                </div>
            ))}
        </>
    )
}

export default SearchPage;