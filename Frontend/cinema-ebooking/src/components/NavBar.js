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

    const onClick = () => {
        navigate(`/search/${search}`)
    }

    const viewProfile = () => {
        navigate('/profile')
    }

    return (
        <div className='navbar'>
            <h1 className='titlelogo' onClick={goHome}>Cinema E-Booking A8</h1>
            <form className='search-form' onSubmit={onClick}>
                <input type='string' onChange={addSearch}></input>
                <input className='search-button' value="Search" type='submit'></input>
            </form>

            {props.user.length === 0 ?
                <div className='right-navbar'>
                    <button className='login-button' onClick={loggingIn}>Login</button>
                </div> :
                <div className='right-navbar'>
                    <h3 className='navbar-email'>{props.user}</h3>
                    <button onClick={viewProfile}>Profile</button>
                    <button onClick={loggingOut}>Logout</button>
                </div>}
        </div>
    )
}

export default NavBar;