import './AddMovies.css'
import { useState,useEffect } from 'react';

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

    const[data, setData] = useState({ title, category, cast, director, producer, synopsis, reviews, poster, trailer, mpaa, showdate, showtime })

    useEffect(() => {
        setData({ title, category, cast, director, producer, synopsis, reviews, poster, trailer, mpaa, showdate, showtime })
    }, [title, category, cast, director, producer, synopsis, reviews, poster, trailer, mpaa, showdate, showtime])

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