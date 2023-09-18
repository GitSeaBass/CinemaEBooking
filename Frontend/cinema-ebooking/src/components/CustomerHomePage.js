import './CustomerHomePage.css'
import { useNavigate } from 'react-router-dom';

function CustomerHomePage(props) {
    const navigate = useNavigate();

    const moviearray = [
        {
            title: 'Barbie',
            poster: 'https://i.ebayimg.com/images/g/1EcAAOSwa-9klig5/s-l1600.jpg',
            showtime: ['7:30', '8:30']
        },
        {
            title: 'Star Wars',
            poster: 'https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg',
            showtime: ['4:30', '5:30']
        },
        {
            title: 'Aquaman',
            poster: 'https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg',
            showtime: ['9:30', '8:00']
        }
    ];

    function loggingIn() {
        navigate('/login');
    }

    return (
        <>
            <div className='navbar'>
                <b1 className='titlelogo'>Cinema E-Booking A8</b1>

                {props.user.length === 0?

                <button className='login-button' onClick={loggingIn}>Login</button> :
                <d3>{props.user}</d3>}
            </div>

            <div className='currently-running-title'>
                Currently Running Movies
            </div>

            <div className='movie-display'>
                {moviearray.map((item) => (
                    <div className='movie-card'>
                        <img src={item.poster} alt={item.title} className='poster'/>
                        <div>{item.title}</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;