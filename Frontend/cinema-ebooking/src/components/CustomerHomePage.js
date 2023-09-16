import './CustomerHomePage.css'

function CustomerHomePage() {
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
    
    return (
        <>
            <div className='navbar'>
                <b1 className='titlelogo'>Cinema E-Booking A8</b1>
                <button className='login-button'>Login</button>
            </div>

            <div className='currently-running-title'>
                Currently Running Movies
            </div>

            <div className='movie-display'>
                {moviearray.map((item) => (
                    <div className='movie-card'>
                        <img src={item.poster} alt={item.title} className='poster'/>
                        <div>{item.title}</div>
                        <div>Showtimes: </div>
                        {item.showtime.map((times) => (
                            <button className='showtime'>{times}</button>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CustomerHomePage;