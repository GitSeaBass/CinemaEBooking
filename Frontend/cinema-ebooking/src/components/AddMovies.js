import './AddMovies.css'
import { useState } from 'react';

function AddMovies(props) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [cast, setCast] = useState('');
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [reviews, setReviews] = useState('');
    const [poster, setPoster] = useState('');
    const [trailer, setTrailer] = useState('');
    const [mpaa, setMpaa] = useState('');
    const [showdate, setShowdate] = useState('');
    const [showtime, setShowtime] = useState('');

    const data = { title, category, cast, director, producer, synopsis, reviews, poster, trailer, mpaa, showdate, showtime }

    function submitMovie() {
        fetch("./", { method: "POST", body: JSON.stringify(data) })
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
                        <label className='addInput'>Title:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setTitle(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Category:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setCategory(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Cast:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setCast(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Director:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setDirector(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Producer:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setProducer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Synopsis:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setSynopsis(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Reviews:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setReviews(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Poster:
                            <input className='addInput' type='text' placeholder='https://' required onChange={(event) => {
                                setPoster(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Trailer:
                            <input className='addInput' type='text' placeholder='https://' required onChange={(event) => {
                                setTrailer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>MPAA rating:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setMpaa(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show date:
                            <input className='addInput' type='text' required onChange={(event) => {
                                setShowdate(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show time:
                            <input className='addInput' type='text' required onChange={(event) => {
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