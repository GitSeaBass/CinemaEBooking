import './SearchPage.css'
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SearchPage(props) {
    const {id} = useParams();

    const[movie, setMovie] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/system/search?title=${id}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data)
            console.log(movie)
        }).catch(err => {
            console.log(err)
        })
    })

    return(
    <>
        <NavBar user={props.user} setUser={props.setUser}/>

        <div className="movie-container">
            {movie[0].title}
        </div>
    </>
    )
}

export default SearchPage;