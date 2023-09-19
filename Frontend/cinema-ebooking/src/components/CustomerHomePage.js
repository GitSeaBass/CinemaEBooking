import './CustomerHomePage.css'
import { useNavigate } from 'react-router-dom';

function CustomerHomePage(props) {
    const navigate = useNavigate();

    const moviearray = [
        {
            title: 'Barbie',
            poster: 'https://i.ebayimg.com/images/g/1EcAAOSwa-9klig5/s-l1600.jpg',
        },
        {
            title: 'Star Wars',
            poster: 'https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg',
        },
        {
            title: 'Aquaman',
            poster: 'https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg',
        },
        {
            title: 'Knives Out',
            poster: 'https://m.media-amazon.com/images/I/51oWGDskkhL.jpg',
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        },
        {
            title: 'Morbius',
            poster: 'https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
        }
    ];

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