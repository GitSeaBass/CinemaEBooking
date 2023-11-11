import './ManageUsers.css'
import { useState, useEffect } from 'react'

function ManageUsers(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/system/all`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const adminButton = document.getElementsByClassName('admin-button')

    const activateButton = document.createElement('button')
    activateButton.appendChild(document.createTextNode('Activate'))
    activateButton.classList.add('activate-button');

    const suspendButton = document.createElement('button')
    suspendButton.appendChild(document.createTextNode('Suspend'));
    suspendButton.classList.add('suspend-button');

    return (
        <div className='ManageUsers-users-container'>
            {props.userarray.filter((item) => item.status !== 'ADMIN').sort().map((item) => (
                <div className='ManageUsers-user-segment'>
                    <div className='ManageUsers-user-email'>{item.email}</div>
                    <div className='ManageUsers-user-buttons'>
                        <button className='ManageUsers-make-admin-button'></button>
                        <button className='ManageUsers-activate-button'></button>
                        <button className='ManageUsers-suspend-button'></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ManageUsers;