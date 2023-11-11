import './ManageMovies.css'
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

    return (
        <div className='ManageMovies-movies-container'>
            {movies.map((item) => (
                <div className='ManageMovies-movie-segment'>
                    <div>{item.title}</div>
                    <button className='ManageMovies-edit-button'>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default ManageMovies;