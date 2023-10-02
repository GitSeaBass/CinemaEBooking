import './AddMovies.css'
import { useState } from 'react';

function AddMovies(props) {
    return (
        <>
            {<div className='form'>
                <h3>Enter Information</h3>
                <form>
                    <div>
                        <label className='addInput'>Title:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Category:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Cast:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Director:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Producer:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Synopsis:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Reviews:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Poster:
                            <input className='addInput' type='text' placeholder='https://'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Trailer:
                            <input className='addInput' type='text' placeholder='https://'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>MPAA rating:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show date:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                    <div>
                        <label className='addInput'>Show time:
                            <input className='addInput' type='text'></input>
                        </label>
                    </div>
                </form>
                <button type="submit" id="signup">Add</button>
            </div>}
        </>
    )
}

export default AddMovies;