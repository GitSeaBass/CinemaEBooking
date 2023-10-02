import './ManageUsers.css'

function ManageUsers(props) {
    return (
        <div className='movies-container'>
            {props.userarray.map((item) => (
                <div className='user-row'>
                    <div>{item.email}</div>
                    <div className='buttons'>
                        <button className='suspendbutton'>Suspend User</button>
                        <button className='adminbutton'>Make Admin</button>
                    </div>
                </div>
        ))}
        </div>
    )
}

export default ManageUsers;