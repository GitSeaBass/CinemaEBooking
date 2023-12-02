import './AdminHomePage.css'
import NavBar from './NavBar'
import AddMovie from './AddMovie'
import ManageMovies from './ManageMovies';
import ManageUsers from './ManageUsers';
import ManagePromotions from './ManagePromotions';
import { useState } from 'react';


function AdminHomePage(props) {
    const [option, setOption] = useState(0)

    function addMovieClick() {
        if (option === 1) {
            setOption(0)
        } else {
            setOption(1)
        }
    }

    function manageMoviesClick() {
        if (option === 2) {
            setOption(0)
        } else {
            setOption(2)
        }
    }

    function manageUsersClick() {
        if (option === 3) {
            setOption(0)
        } else {
            setOption(3)
        }
    }

    function managePromosClick() {
        if (option === 4) {
            setOption(0)
        } else {
            setOption(4)
        }
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} />
            {option === 0 &&
                <div className='AdminHomePage-options'>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={addMovieClick}>Add Movie</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={manageMoviesClick}>Manage Movies</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={manageUsersClick}>Manage Users</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={managePromosClick}>Manage Promotions</button>
                </div>
            }

            {option === 1 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={addMovieClick}>Add Movie</button>
                    </div>
                    <AddMovie user={props.user} setUser={props.setUser} />
                </>
            }
            {option === 2 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={manageMoviesClick}>Manage Movies</button>
                    </div>
                    <ManageMovies user={props.user} setUser={props.setUser} />
                </>
            }
            {option === 3 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={manageUsersClick}>Manage Users</button>
                    </div>
                    <ManageUsers user={props.user} setUser={props.setUser} />
                </>
            }
            {option === 4 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={managePromosClick}>Manage Promotions</button>
                    </div>
                    <ManagePromotions user={props.user} setUser={props.setUser} />
                </>
            }
        </>
    )
}

export default AdminHomePage;