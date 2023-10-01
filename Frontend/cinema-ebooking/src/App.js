import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import CustomerHomePage from './components/CustomerHomePage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';

function App() {
  const moviearray = [
    {
        title: 'Barbie',
        poster: 'https://i.ebayimg.com/images/g/1EcAAOSwa-9klig5/s-l1600.jpg',
        rating: 7.1,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/pBk4NYhWNMM'
    },
    {
        title: 'Star Wars',
        poster: 'https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg',
        rating: 8.8,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
        title: 'Aquaman',
        poster: 'https://media.comicbook.com/2018/07/aqamn-vert-tsr-dom-2764x4096-r01-master-1122913.jpeg',
        rating: 8.2,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/WDkg3h8PCVU'
    },
    {
        title: 'Knives Out',
        poster: 'https://m.media-amazon.com/images/I/51oWGDskkhL.jpg',
        rating: 6.8,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/qGqiHJTsRkQ'
    },
    {
        title: 'Spongebob Movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 9.9,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/a2cowVH03Xo'
    },
    {
        title: 'Morbius',
        poster: 'https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
        rating: 4.7,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/oZ6iiRrz1SY'
    },
    {
        title: 'Spongebob Movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 9.9,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
        title: 'Jurassic World',
        poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
        rating: 9.0,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/RFinNxS5KN4'
    },
    {
        title: 'Spongebob Movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 9.9,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
        title: 'Jurassic World',
        poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
        rating: 9.0,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/RFinNxS5KN4'
    },
    {
        title: 'Spongebob Movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 9.9,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
        title: 'Jurassic World',
        poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
        rating: 9.0,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/RFinNxS5KN4'
    },
    {
        title: 'Spongebob Movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjM5YjI0NmQtOTk4OS00NTNiLThkNzQtNTZlNGE4Y2VmNmU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        rating: 9.9,
        status: 'soon',
        trailer: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
        title: 'Jurassic World',
        poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
        rating: 9.0,
        status: 'now',
        trailer: 'https://www.youtube.com/embed/RFinNxS5KN4'
    },
  ];
  
  const[user, setUser] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerHomePage user={user} setUser={setUser} moviearray={moviearray}/>} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
          <Route path="/search" element={<SearchPage moviearray={moviearray} user={user} setUser={setUser}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
