import './AddShowing.css'
import NavBar from './NavBar.js'
import { useState } from 'react'

function AddShowing(props) {
    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            <div className='AddShowing-showing-container'>

            </div>
        </>
    )
}

export default AddShowing