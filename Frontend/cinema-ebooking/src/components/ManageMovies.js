import './ManageMovies.css'

function ManageMovies(props) {
    return (
        <div className='movies-container'>
                {props.moviearray.map((item) => (
                    <div className='movie-row'>
                        <div>{item.title}</div>
                        <button className='editbutton'>Edit Movie</button>
                    </div>
                ))}
        </div>
    )
}

export default ManageMovies;