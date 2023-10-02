import './AddMovies.css'
import { useState } from 'react';

function AddMovies(props) {
    return (
        <>
            {<div className='form'>
                <h3>Enter Information</h3>
                <form>
                    <label className='addInput'>Title:
                        <input type='text'></input>
                    </label>
                    <label className='addInput'>Poster:
                        <input type='text' placeholder='https://'></input>
                    </label>
                    <label className='addInput'>Rating:
                        <input className='addInput' type='number' min='0' max='10' step='0.1'></input>
                    </label>
                    <label className='addInput'>Trailer:
                        <input className='addInput' type='text' placeholder='https://'></input>
                    </label>
                </form>
                <button type="submit" id="signup">Add</button>
            </div>}
        </>
    )
}

export default AddMovies;