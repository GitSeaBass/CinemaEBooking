import './AddMovie.css'
import { useState } from 'react'

function AddMovie(props) {
    const [title, setTitle] = useState('title');
    const [category, setCategory] = useState('category');
    const [cast, setCast] = useState('cast');
    const [director, setDirector] = useState('director');
    const [producer, setProducer] = useState('producer');
    const [synopsis, setSynopsis] = useState('synopsis');
    const [reviews, setReviews] = useState('review');
    const [poster, setPoster] = useState('poster');
    const [trailer, setTrailer] = useState('trailer');
    const [mpaa, setMpaa] = useState('mpaa');
    const [showdate, setShowdate] = useState('showdate');
    const [showtime, setShowtime] = useState('showtime');

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

    const submitMovie = async () => {

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
    }

    return (
        <>
            <div className='AddMovie-form-container'>
                <h3>Enter Information</h3>
                <form className='AddMovie-form'>
                    <label>Title:
                        <input type='text' required onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                    </label>
                    <label>Category:
                        <input type='text' required onChange={(event) => {
                            setCategory(event.target.value);
                        }} />
                    </label>
                    <label>Cast:
                        <input type='text' required onChange={(event) => {
                            setCast(event.target.value);
                        }} />
                    </label>
                    <label>Director:
                        <input type='text' required onChange={(event) => {
                            setDirector(event.target.value);
                        }} />
                    </label>
                    <label>Producer:
                        <input type='text' required onChange={(event) => {
                            setProducer(event.target.value);
                        }} />
                    </label>
                    <label>Synopsis:
                        <input type='text' required onChange={(event) => {
                            setSynopsis(event.target.value);
                        }} />
                    </label>
                    <label>Reviews:
                        <input type='text' required onChange={(event) => {
                            setReviews(event.target.value);
                        }} />
                    </label>
                    <label>Poster:
                        <input type='text' placeholder='https://' required onChange={(event) => {
                            setPoster(event.target.value);
                        }} />
                    </label>
                    <label>Trailer:
                        <input type='text' placeholder='https://' required onChange={(event) => {
                            setTrailer(event.target.value);
                        }} />
                    </label>
                    <label>MPAA rating:
                        <input type='text' required onChange={(event) => {
                            setMpaa(event.target.value);
                        }} />
                    </label>
                    <label>Show date:
                        <input type='text' required onChange={(event) => {
                            setShowdate(event.target.value);
                        }} />
                    </label>
                    <label>Show time:
                        <input type='text' required onChange={(event) => {
                            setShowtime(event.target.value);
                        }} />
                    </label>
                </form>
                <button className='AddMovie-add-button' type='submit' onClick={submitMovie}>Add</button>
            </div>
        </>
    )
}

export default AddMovie;