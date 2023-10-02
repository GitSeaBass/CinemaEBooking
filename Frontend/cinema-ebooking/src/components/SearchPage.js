import './SearchPage.css'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchPage(props) {
    const {id} = useParams();

    const[movie, setMovie] = useState([]);
    const[poster, setPoster] = useState([]);
    const[trailer, setTrailer] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/system/search?title=${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data[0].title)
            setPoster(data[0].poster_url)
            setTrailer(data[0].trailer_url)
            console.log(movie)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return(
    <>
        <NavBar user={props.user} setUser={props.setUser}/>

        <div className="movie-container">
            {movie}
        </div>
        <img src={poster} alt={movie}/>
        <iframe src={trailer} title={movie}/>
    </>
    )
}

export default SearchPage;