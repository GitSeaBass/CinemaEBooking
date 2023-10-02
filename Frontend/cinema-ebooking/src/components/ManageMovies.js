import './ManageMovies.css'

function ManageMovies(props) {
    return (
        <div className='movies-container'>
            {props.moviearray.map((item) => (
                <div>{item.title}</div>
        ))}
        </div>
    )
}

export default ManageMovies;