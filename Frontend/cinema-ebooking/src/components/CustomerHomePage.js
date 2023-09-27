import './CustomerHomePage.css'
import { useNavigate } from 'react-router-dom';

function CustomerHomePage(props) {
    const navigate = useNavigate();

    const moviearray = [
        {
            title: 'Barbie',
            poster: 'https://i.ebayimg.com/images/g/1EcAAOSwa-9klig5/s-l1600.jpg',
            rating: 7.1,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Star Wars',
            poster: 'https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg',
            rating: 8.8,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Aquaman',
            poster: 'https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg',
            rating: 8.2,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Knives Out',
            poster: 'https://m.media-amazon.com/images/I/51oWGDskkhL.jpg',
            rating: 6.8,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Morbius',
            poster: 'https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
            rating: 4.7,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Jurassic World',
            poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=RFinNxS5KN4'
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Jurassic World',
            poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=RFinNxS5KN4'
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Jurassic World',
            poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=RFinNxS5KN4'
        },
        {
            title: 'Spongebob Movie',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/watch?v=vZ734NWnAHA'
        },
        {
            title: 'Jurassic World',
            poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/watch?v=RFinNxS5KN4'
        },
        
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
                Now Playing
            </div>

            <div className='movie-display'>
                {moviearray.filter((item) => item.status === 'now').map((item) => (
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
                {moviearray.filter((item) => item.status === 'soon').map((item) => (
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