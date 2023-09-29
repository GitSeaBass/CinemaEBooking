import './SearchPage.css'
import NavBar from './NavBar';

function searchPage(props) {
    const sortedmovies = props.moviearray.sort((a, b) => (a.title > b.title) ? 1 : -1)

    return(
    <>
        <NavBar user={props.user} setUser={props.setUser}/>

        <div className="movie-container">
            {sortedmovies.map((item) => (
                <img src={item.poster} alt={item.title} className="poster"/>
            ))}
        </div>
    </>
    )
}

export default searchPage;