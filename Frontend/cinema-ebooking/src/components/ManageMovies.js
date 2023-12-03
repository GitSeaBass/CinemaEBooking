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

    async function archiveMovie (moviename) {

        const tempdata = await fetch(`http://localhost:8080/system/search?title=${moviename}`).then(res => res.json())
        const data = tempdata[0]
        data.category = 'Archived'

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
                        <button className='ManageMovies-button' onClick={() => {
                            archiveMovie(item.title)
                        }}>Archive</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ManageMovies;