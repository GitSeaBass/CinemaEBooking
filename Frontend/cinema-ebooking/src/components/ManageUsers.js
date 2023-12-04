import './ManageUsers.css'
import { useState, useEffect } from 'react'

function ManageUsers(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/system/getallusers`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const makeAdmin = async (e) => {
        const singleUser = await fetch(`http://localhost:8080/system/getuser?email=${e.target.name}`)
            .then(res => res.json())
        
        await (singleUser.status = 'ADMIN')

        const requestOptions = await {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singleUser)
        };
    
        const result = await fetch("http://localhost:8080/system/updateProfile", requestOptions)
        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }

    const unsuspendUser = async (e) => {
        const singleUser = await fetch(`http://localhost:8080/system/getuser?email=${e.target.name}`)
            .then(res => res.json())
        
        await (singleUser.status = 'ACTIVE')

        const requestOptions = await {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singleUser)
        };
    
        const result = await fetch("http://localhost:8080/system/updateProfile", requestOptions)
        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }

    const suspendUser = async (e) => {
        const singleUser = await fetch(`http://localhost:8080/system/getuser?email=${e.target.name}`)
            .then(res => res.json())
        
        await (singleUser.status = 'SUSPENDED')

        const requestOptions = await {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singleUser)
        };
    
        const result = await fetch("http://localhost:8080/system/updateProfile", requestOptions)
        const resultinJSON = await result.json();
        console.log(resultinJSON)
    }


    const adminButton = document.getElementsByClassName('admin-button')

    const activateButton = document.createElement('button')
    activateButton.appendChild(document.createTextNode('Activate'))
    activateButton.classList.add('activate-button');

    const suspendButton = document.createElement('button')
    suspendButton.appendChild(document.createTextNode('Suspend'));
    suspendButton.classList.add('suspend-button');

    return (
        <div className='ManageUsers-users-container'>
            {user.filter((item) => item.status !== 'ADMIN' && item.status !== 'SUSPENDED').sort().map((item) => (
                <div className='ManageUsers-user-segment'>
                    <div className='ManageUsers-user-email'>{item.email}</div>
                    <div className='ManageUsers-user-buttons'>
                        <button name={item.email} className='ManageUsers-make-admin-button' onClick={makeAdmin}></button>
                        <button name={item.email} className='ManageUsers-activate-button' onClick={unsuspendUser}></button>
                        <button name={item.email} className='ManageUsers-suspend-button' onClick={suspendUser}></button>
                    </div>
                </div>
            ))}

            {user.filter((item) => item.status === 'SUSPENDED').map((item) => (
                <div className='ManageUsers-user-segment'>
                <div className='ManageUsers-user-email-suspended'>{item.email}</div>
                <div className='ManageUsers-user-buttons'>
                    <button name={item.email} className='ManageUsers-make-admin-button' onClick={makeAdmin}></button>
                    <button name={item.email} className='ManageUsers-activate-button' onClick={unsuspendUser}></button>
                    <button name={item.email} className='ManageUsers-suspend-button' onClick={suspendUser}></button>
                </div>
            </div>
            ))

            }

        </div>
    )
}

export default ManageUsers;