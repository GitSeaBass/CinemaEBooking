import './NavBar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar(props) {
    const navigate = useNavigate();

    const[search, setSearch] = useState('')
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
    }

    function viewMovies() {
        navigate('/search')
    }

    const onClick = () => {
        navigate(`/search/${search}`)
    }

    return (
        <div className='navbar'>
                <b1 className='titlelogo' onClick={goHome}>Cinema E-Booking A8</b1>
                <form className='search-form' onSubmit={onClick}>
                    <input type='string' onChange={addSearch}></input>
                    <input type='submit'></input>
                </form>

                {props.user.length === 0?
                <div className='right-navbar'>
                    <button className='login-button' onClick={loggingIn}>Login</button>
                </div>:
                <div className='right-navbar'>
                    <d3 className='navbar-email'>{props.user}</d3>
                    <button onClick={loggingOut}>Logout</button>
                </div>}
            </div>
    )
}

export default NavBar;