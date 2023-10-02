import './AdminHomePage.css'
import NavBar from './NavBar'
import ManageMovies from './ManageMovies';
import ManageUsers from './ManageUsers';
import ManagePromotions from './ManagePromotions';
import { useState } from 'react';


function AdminHomePage(props) {
    const[option, setOption] = useState(0)
    const addOption = (e) => {
        setOption(e)
    }

    function movieclick() {
        setOption(1)
    }

    function userclick() {
        setOption(2)
    }

    function promoclick() {
        setOption(3)
    }

    return(
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={props.moviearray}/>
            <div className='options'>
                <button className='admin-button' onClick={movieclick}>Manage Movies</button>
                <button className='admin-button' onClick={userclick}>Manage Users</button>
                <button className='admin-button' onClick={promoclick}>Manage Promotions</button>
            </div>

            <ManageMovies moviearray={props.moviearray}/>
            <ManageUsers userarray={props.userarray}/>
            <ManagePromotions promoarray={props.promoarray}/>
        </>
    )
}

export default AdminHomePage;