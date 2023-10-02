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

    return (
        <>
            {<div className='form'>
                <h3>Enter Information</h3>
                <form>
                    <div>
                        <label className='addInput'>Title:
                            <input className='addInput' type='text' onChange={(event) => {
                                setTitle(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Category:
                            <input className='addInput' type='text' onChange={(event) => {
                                setCategory(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Cast:
                            <input className='addInput' type='text' onChange={(event) => {
                                setCast(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Director:
                            <input className='addInput' type='text' onChange={(event) => {
                                setDirector(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Producer:
                            <input className='addInput' type='text' onChange={(event) => {
                                setProducer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Synopsis:
                            <input className='addInput' type='text' onChange={(event) => {
                                setSynopsis(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Reviews:
                            <input className='addInput' type='text' onChange={(event) => {
                                setReviews(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Poster:
                            <input className='addInput' type='text' placeholder='https://' onChange={(event) => {
                                setPoster(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Trailer:
                            <input className='addInput' type='text' placeholder='https://' onChange={(event) => {
                                setTrailer(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>MPAA rating:
                            <input className='addInput' type='text' onChange={(event) => {
                                setMpaa(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show date:
                            <input className='addInput' type='text' onChange={(event) => {
                                setShowdate(event.target.value);
                            }} />
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show time:
                            <input className='addInput' type='text' onChange={(event) => {
                                setShowtime(event.target.value);
                            }} />
                        </label>
                    </div>
                </form>
                <button type="submit" id="signup">Add</button>
            </div>}
        </>
    )
}

export default AddMovies;