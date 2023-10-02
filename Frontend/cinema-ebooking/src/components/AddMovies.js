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
         "title": title,
         "category": category,
         "cast": cast,
         "director": director,
         "producer": producer,
         "synopsis": synopsis,
         "reviews": reviews,
         "poster_url": poster,
         "trailer_url": trailer,
         "mpaa_rating": mpaa,
         "show_date": showdate,
         "show_time": showtime
    }

    function submitMovie() {
        console.log("Data: " + data);
        fetch("http://localhost:8080/system/add", { method: "POST", body: JSON.stringify(data) })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
    }

    return (
        <>
            {<div className='form'>
                <h3>Enter Information</h3>
                <form>
                    <div>
                        <label className='add-input'>Title:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setTitle(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Category:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setCategory(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Cast:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setCast(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Director:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setDirector(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Producer:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setProducer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Synopsis:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setSynopsis(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Reviews:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setReviews(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Poster:
                            <input className='add-input' type='text' placeholder='https://' required onChange={(event) => {
                                setPoster(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Trailer:
                            <input className='add-input' type='text' placeholder='https://' required onChange={(event) => {
                                setTrailer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>MPAA rating:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setMpaa(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Show date:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setShowdate(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='add-input'>Show time:
                            <input className='add-input' type='text' required onChange={(event) => {
                                setShowtime(event.target.value);
                            }} />
                        </label>
                    </div>
                </form>
                <button className='add' type='submit' id='signup' onClick={submitMovie}>Add</button>
            </div>}
        </>
    )
}

export default AddMovies;