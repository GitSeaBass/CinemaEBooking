import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar(props) {
    const navigate = useNavigate();

    const [search, setSearch] = useState('')
    const addSearch = (e) => {
        setSearch(e.target.value)
    };

    function goHome() {
        navigate('/')
    }

    function loggingIn() {
        navigate('/login');
    }

    function loggingOut() {
        props.setUser('');
        window.location.reload();
    }

    const searchFor = () => {
        navigate(`/search/${search}`)
    }

    const viewProfile = () => {
        navigate('/profile')
    }

    return (
        <div className='NavBar-nav-bar'>
            <h3 className='NavBar-title-logo' onClick={goHome}>Cinema E-Booking A8</h3>
            <form className='NavBar-search-form' onSubmit={searchFor}>
                <input type='string' className='NavBar-search-bar' onChange={addSearch}></input>
                <button className='NavBar-button NavBar-search-button' type='submit'>Search</button>
            </form>

            {props.user.length === 0 ?
                <div className='NavBar-right-nav-bar'>
                    <button className='NavBar-button NavBar-log-in-button' onClick={loggingIn}>Log In</button>
                </div> :
                <div className='NavBar-right-nav-bar'>
                    <h3 className='NavBar-nav-bar-email'>{props.user}</h3>
                    <button className='NavBar-button NavBar-profile-button' onClick={viewProfile}>View Profile</button>
                    <button className='NavBar-button NavBar-log-out-button' onClick={loggingOut}>Log Out</button>
                </div>}
        </div>
    )
}

export default NavBar;