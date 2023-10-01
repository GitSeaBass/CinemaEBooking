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