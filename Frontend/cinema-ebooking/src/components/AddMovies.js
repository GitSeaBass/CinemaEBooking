import './AddMovies.css'
import { useState } from 'react';

function AddMovies(props) {
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
            {<div className='AddMovies-form'>
                <h3>Enter Information</h3>
                <form>
                    <div>
                        <label className='AddMovies-add-input'>Title:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setTitle(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Category:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setCategory(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Cast:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setCast(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Director:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setDirector(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Producer:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setProducer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Synopsis:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setSynopsis(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Reviews:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setReviews(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Poster:
                            <input className='AddMovies-add-input' type='text' placeholder='https://' required onChange={(event) => {
                                setPoster(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Trailer:
                            <input className='AddMovies-add-input' type='text' placeholder='https://' required onChange={(event) => {
                                setTrailer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>MPAA rating:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setMpaa(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Show date:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setShowdate(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='AddMovies-add-input'>Show time:
                            <input className='AddMovies-add-input' type='text' required onChange={(event) => {
                                setShowtime(event.target.value);
                            }} />
                        </label>
                    </div>
                </form>
                <button className='AddMovies-add-button' type='submit' id='signup' onClick={submitMovie}>Add</button>
            </div>}
        </>
    )
}

export default AddMovies;