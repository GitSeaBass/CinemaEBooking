import './CustomerHomePage.css'
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

function CustomerHomePage(props) {

    const[testtitle, setTesttitle] = useState('TEST')
    const addTesttitle = (e) => {
        setTesttitle(e)
    }

    const[dbmovies, setDbMovies] = useState([])
    const addDbMovies = (e) => {
        setDbMovies(e)
    }

    useEffect(() => {
        fetch(`http://localhost:8080/system/all`)
            .then(res => res.json())
            .then(data => {
                addDbMovies(data)
                console.log(dbmovies)
            }).catch(err => {
                console.log(err)
            })
    })

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={props.moviearray}/>

            <div>{testtitle}</div>

            <div className='currently-running-title'>
                Now Playing
            </div>

            <div className='movie-display'>
                {dbmovies.map((item) => (
                    <div className='movie-card'>
                        <div className='left-movie'>
                            <img src={item.poster_url} alt={item.title} className='poster'/>
                            <div>{item.title}</div>
                            <div>MPAA: {item.mpaa_rating}</div>
                        </div>
                        <div className='right-movie'>
                            <iframe src={item.trailer_url} title={item.title} className="trailer"/>
                        </div>      
                    </div>
                ))}
            </div>

            <div className='currently-running-title'>
                Coming Soon
            </div>

            <div className='movie-display'>
                {props.moviearray.filter((item) => item.status === 'soon').map((item) => (
                    <div className='movie-card'>
                        <div className='left-movie'>
                            <img src={item.poster} alt={item.title} className='poster'/>
                            <div>{item.title}</div>
                            <div>⭐{item.rating}/10</div>
                        </div>
                        <div className='right-movie'>
                            <iframe src={item.trailer} title={item.title} className="trailer"/>
                        </div> 
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;