import './EditMovie.css'
import NavBar from './NavBar'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react'

function EditMovie(props) {
    const location = useLocation()

    const [title, setTitle] = useState(location.state.movie.title);
    const [category, setCategory] = useState(location.state.movie.category);
    const [cast, setCast] = useState(location.state.movie.cast);
    const [director, setDirector] = useState(location.state.movie.director);
    const [producer, setProducer] = useState(location.state.movie.producer);
    const [synopsis, setSynopsis] = useState(location.state.movie.synopsis);
    const [reviews, setReviews] = useState(location.state.movie.reviews);
    const [poster, setPoster] = useState(location.state.movie.poster_url);
    const [trailer, setTrailer] = useState(location.state.movie.trailer_url);
    const [mpaa, setMpaa] = useState(location.state.movie.mpaa_rating);
    const [showdate, setShowdate] = useState(location.state.movie.show_date);
    const [showtime, setShowtime] = useState(location.state.movie.show_time);

    const data = {
        'title': title,
        'category': category,
        'cast': cast,
        'director': director,
        'producer': producer,
        'synopsis': synopsis,
        'reviews': reviews,
        'poster_url': poster,
        'trailer_url': trailer,
        'mpaa_rating': mpaa,
        'show_date': showdate,
        'show_time': showtime
    }

    const navigate = useNavigate()

    async function submitChanges() {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const result = await fetch("http://localhost:8080/system/add", requestOptions)

        const resultinJSON = await result.json();
        console.log(resultinJSON)

        navigate('/admin')
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='EditMovie-form-container'>
                <form className='EditMovie-form'>
                    <h3>Update information</h3>
                    <label>Title:
                        <input type='text' placeholder={title} onChange={(event) => {
                            setTitle(event.target.value)
                        }}></input>
                    </label>
                    <label>Category:
                        <input type='text' placeholder={category} onChange={(event) => {
                            setCategory(event.target.value)
                        }}></input>
                    </label>
                    <label>Cast:
                        <input type='text' placeholder={cast} onChange={(event) => {
                            setCast(event.target.value)
                        }}></input>
                    </label>
                    <label>Director:
                        <input type='text' placeholder={director} onChange={(event) => {
                            setDirector(event.target.value)
                        }}></input>
                    </label>
                    <label>Producer:
                        <input type='text' placeholder={producer} onChange={(event) => {
                            setProducer(event.target.value)
                        }}></input>
                    </label>
                    <label>Synopsis:
                        <input type='text' placeholder={synopsis} onChange={(event) => {
                            setSynopsis(event.target.value)
                        }}></input>
                    </label>
                    <label>Reviews:
                        <input type='text' placeholder={reviews} onChange={(event) => {
                            setReviews(event.target.value)
                        }}></input>
                    </label>
                    <label>Poster:
                        <input type='text' placeholder={poster} onChange={(event) => {
                            setPoster(event.target.value)
                        }}></input>
                    </label>
                    <label>Trailer:
                        <input type='text' placeholder={trailer} onChange={(event) => {
                            setTrailer(event.target.value)
                        }}></input>
                    </label>
                    <label>MPAA rating:
                        <input type='text' placeholder={mpaa} onChange={(event) => {
                            setMpaa(event.target.value)
                        }}></input>
                    </label>
                    <label>Show date:
                        <input type='text' placeholder={showdate} onChange={(event) => {
                            setShowdate(event.target.value)
                        }}></input>
                    </label>
                    <label>Show time:
                        <input type='text' placeholder={showtime} onChange={(event) => {
                            setShowtime(event.target.value)
                        }}></input>
                    </label>
                </form>
                <button className='EditMovie-submit-changes-button' type='submit' onClick={() => {
                    submitChanges()
                }}>Submit Changes</button>
            </div>
        </>
    )
}

export default EditMovie;