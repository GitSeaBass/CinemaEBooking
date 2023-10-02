import './AdminHomePage.css'
import NavBar from './NavBar'
import AddMovies from './AddMovies'
import ManageMovies from './ManageMovies';
import ManageUsers from './ManageUsers';
import ManagePromotions from './ManagePromotions';
import { useState } from 'react';


function AdminHomePage(props) {
    const [option, setOption] = useState(0)
    const addOption = (e) => {
        setOption(e)
    }

    function addclick() {
        setOption(1);
    }

    function movieclick() {
        setOption(2)
    }

    function userclick() {
        setOption(3)
    }

    function promoclick() {
        setOption(4)
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={props.moviearray} />
            <div className='options'>
                <button className='admin-button' onClick={addclick}>Add Movie</button>
                <button className='admin-button' onClick={movieclick}>Manage Movies</button>
                <button className='admin-button' onClick={userclick}>Manage Users</button>
                <button className='admin-button' onClick={promoclick}>Manage Promotions</button>
            </div>

            <AddMovies moviearray={props.moviearray} />
            <ManageMovies moviearray={props.moviearray} />
            <ManageUsers userarray={props.userarray} />
            <ManagePromotions promoarray={props.promoarray} />
        </>
    )
}

export default AdminHomePage;