import './CustomerHomePage.css'
import { useNavigate } from 'react-router-dom';

function CustomerHomePage(props) {
    const navigate = useNavigate();

    function loggingIn() {
        navigate('/login');
    }

    function loggingOut() {
        props.setUser('');
    }

    return (
        <>
            <div className='navbar'>
                <b1 className='titlelogo'>Cinema E-Booking A8</b1>

                {props.user.length === 0?

                <button className='login-button' onClick={loggingIn}>Login</button>:
                <div className='right-navbar'>
                    <d3>{props.user}</d3>
                    <button onClick={loggingOut}>Logout</button>
                </div>}
            </div>

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