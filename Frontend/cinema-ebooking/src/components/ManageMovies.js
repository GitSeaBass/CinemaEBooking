import './ManageMovies.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function ManageMovies(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/system/all`)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                console.log(movies)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    function addShowing(movie) {
        navigate('/addshowing', { state: { movie: movie } })
    }

    function editMovie(movie) {
        navigate('/editmovie', { state: { movie: movie } })
    }

    return (
        <div className='ManageMovies-movies-container'>
            {movies.map((item) => (
                <div className='ManageMovies-movie-segment'>
                    <div>{item.title}</div>
                    <div>
                        <button className='ManageMovies-button' onClick={() => {
                            addShowing(item)
                        }}>Add Showing</button>
                        <button className='ManageMovies-button' onClick={() => {
                            editMovie(item)
                        }}>Edit</button>
                        <button className='ManageMovies-button'>Archive</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ManageMovies;