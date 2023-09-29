import './SearchPage.css'

function searchPage({moviearray}) {
    const sortedmovies = moviearray.sort((a, b) => (a.title > b.title) ? 1 : -1)

    return(
    <>
        <div className="movie-container">
            {sortedmovies.map((item) => (
                <img src={item.poster} alt={item.title} className="poster"/>
            ))}
        </div>
    </>
    )
}

export default searchPage;