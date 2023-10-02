import './ManageUsers.css'

function ManageUsers(props) {
    return (
        <div className='movies-container'>
            {props.userarray.map((item) => (
                <div>{item.email}</div>
        ))}
        </div>
    )
}

export default ManageUsers;