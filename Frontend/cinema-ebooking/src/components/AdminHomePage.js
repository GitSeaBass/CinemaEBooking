import './AdminHomePage.css'
import NavBar from './NavBar'
import AddMovies from './AddMovies'
import ManageMovies from './ManageMovies';
import ManageUsers from './ManageUsers';
import ManagePromotions from './ManagePromotions';
import { useState } from 'react';


function AdminHomePage(props) {
    const [option, setOption] = useState(0)

    function addclick() {
        if (option === 1) {
            setOption(0)
        } else {
            setOption(1)
        }
    }

    function movieclick() {
        if (option === 2) {
            setOption(0)
        } else {
            setOption(2)
        }
    }

    function userclick() {
        if (option === 3) {
            setOption(0)
        } else {
            setOption(3)
        }
    }

    function promoclick() {
        if (option === 4) {
            setOption(0)
        } else {
            setOption(4)
        }
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={props.moviearray} />
            {option === 0 &&
                <div className='options'>
                    <button className='admin-button' onClick={addclick}>Add Movie</button>
                    <button className='admin-button' onClick={movieclick}>Manage Movies</button>
                    <button className='admin-button' onClick={userclick}>Manage Users</button>
                    <button className='admin-button' onClick={promoclick}>Manage Promotions</button>
                </div>
            }

            {option === 1 &&
                <>
                    <div className='options'>
                        <button className='admin-button' onClick={addclick}>Add Movie</button>
                    </div>
                    <AddMovies moviearray={props.moviearray} />
                </>
            }
            {option === 2 &&
                <>
                    <div className='options'>
                        <button className='admin-button' onClick={movieclick}>Manage Movies</button>
                    </div>
                    <ManageMovies moviearray={props.moviearray} />
                </>
            }
            {option === 3 &&
                <>
                    <div className='options'>
                        <button className='admin-button' onClick={userclick}>Manage Users</button>
                    </div>
                    <ManageUsers userarray={props.userarray} />
                </>
            }
            {option === 4 &&
                <>
                    <div className='options'>
                        <button className='admin-button' onClick={promoclick}>Manage Promotions</button>
                    </div>
                    <ManagePromotions promoarray={props.promoarray} />
                </>
            }
        </>
    )
}

export default AdminHomePage;