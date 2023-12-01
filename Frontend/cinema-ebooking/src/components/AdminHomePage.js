import './AdminHomePage.css'
import NavBar from './NavBar'
import AddMovies from './AddMovies'
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

    function addShowingClick() {
        if (option === 2) {
            setOption(0)
        } else {
            setOption(2)
        }
    }

    function editMoviesClick() {
        if (option === 3) {
            setOption(0)
        } else {
            setOption(3)
        }
    }

    function manageUsersClick() {
        if (option === 4) {
            setOption(0)
        } else {
            setOption(4)
        }
    }

    function managePromosClick() {
        if (option === 5) {
            setOption(0)
        } else {
            setOption(5)
        }
    }

    return (
        <>
            <NavBar user={props.user} setUser={props.setUser} moviearray={props.moviearray} />
            {option === 0 &&
                <div className='AdminHomePage-options'>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={addMovieClick}>Add Movie</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={addShowingClick}>Add Showing</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={editMoviesClick}>Edit Movies</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={manageUsersClick}>Manage Users</button>
                    <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={managePromosClick}>Manage Promotions</button>
                </div>
            }

            {option === 1 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-1' onClick={addMovieClick}>Add Movie</button>
                    </div>
                    <AddMovies />
                </>
            }
            {option === 2 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={addShowingClick}>Add Showing</button>
                    </div>
                </>
            }
            {option === 3 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={editMoviesClick}>Edit Movies</button>
                    </div>
                    <ManageMovies />
                </>
            }
            {option === 4 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={manageUsersClick}>Manage Users</button>
                    </div>
                    <ManageUsers />
                </>
            }
            {option === 5 &&
                <>
                    <div className='AdminHomePage-options'>
                        <button className='AdminHomePage-admin-button AdminHomePage-admin-button-2' onClick={managePromosClick}>Manage Promotions</button>
                    </div>
                    <ManagePromotions />
                </>
            }
        </>
    )
}

export default AdminHomePage;