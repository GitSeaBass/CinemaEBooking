import './CustomerHomePage.css'
import NavBar from './NavBar';

function CustomerHomePage(props) {

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser}/>

            <div className='currently-running-title'>
                Now Playing
            </div>

            <div className='movie-display'>
                {props.moviearray.filter((item) => item.status === 'now').map((item) => (
                    <div className='movie-card'>
                        <img src={item.poster} alt={item.title} className='poster'/>
                        <div>{item.title}</div>
                        <div>⭐{item.rating}/10</div>
                        <div className='trailer-button'> <a href={item.trailer} target='_blank' rel='noreferrer'>Trailer</a> </div>        
                    </div>
                ))}
            </div>

            <div className='currently-running-title'>
                Coming Soon
            </div>

            <div className='movie-display'>
                {props.moviearray.filter((item) => item.status === 'soon').map((item) => (
                    <div className='movie-card'>
                        <img src={item.poster} alt={item.title} className='poster'/>
                        <div>{item.title}</div>
                        <div>⭐{item.rating}/10</div>
                        <div className='trailer-button'> <a href={item.trailer} target='_blank' rel='noreferrer'>Trailer</a> </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;