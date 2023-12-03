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

    function book() {
        console.log(full)
        navigate('/showings', { state: { movie: full } })
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            {typeof full != 'undefined' &&
                <div className="SearchPage-movie-container">
                    {movie}
                    <img className='SearchPage-search-poster' src={poster} alt={movie} />
                    <iframe className='SearchPage-search-trailer' src={trailer} title={movie} />
                    <button className="SearchPage-book-button" onClick={book}>BOOK MOVIE</button>
                </div>
            }
            {typeof full == 'undefined' &&
                <div className='SearchPage-not-found'>
                    <p>No movie was found.</p>
                </div>
            }
        </>
    )
}

export default SearchPage;