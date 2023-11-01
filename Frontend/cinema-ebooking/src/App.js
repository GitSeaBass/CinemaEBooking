import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CustomerHomePage from './components/CustomerHomePage';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import CreateAccountPage from './components/CreateAccountPage';
import ConfirmationWindow from './components/ConfirmationWindow';
import ViewProfile from './components/ViewProfile';
import AdminHomePage from './components/AdminHomePage';
import SelectShowing from './components/SelectShowing';
import SelectTime from './components/SelectTime';
import SelectSeats from './components/SelectSeats';
import OrderConfirm from './components/OrderConfirm';
import Checkout from './components/Checkout';
import HomePage from './components/HomePage';
import ForgotPasswordPage from './components/ForgotPasswordPage';

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
            title: 'Spider-Man: Into the Spider-Verse',
            poster: 'https://i.ebayimg.com/images/g/NlwAAOSwT1di4wY0/s-l1600.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/embed/g4Hbz2jLxvQ'
        },
        {
            title: 'Jurassic World',
            poster: 'https://cdn.europosters.eu/image/1300/posters/jurassic-world-i114154.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/embed/RFinNxS5KN4'
        },
        {
            title: 'Oppenheimer',
            poster: 'https://m.media-amazon.com/images/I/71lqDylcvGL.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/embed/bK6ldnjE3Y0'
        },
        {
            title: 'Scream VI',
            poster: 'https://alternativemovieposters.com/wp-content/uploads/2023/01/Glen-Matthew-Fechalin_Scream6.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/embed/h74AXqw4Opc'
        },
        {
            title: 'Mortal Kombat (2021)',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/embed/55QjhYwmdJs'
        },
        {
            title: 'Kingsman: The Secret Service',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/embed/m4NCribDx4U'
        },
        {
            title: 'Godzilla vs. Kong',
            poster: 'https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
            rating: 9.9,
            status: 'soon',
            trailer: 'https://www.youtube.com/embed/odM92ap8_c0'
        },
        {
            title: 'TENET',
            poster: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
            rating: 9.0,
            status: 'now',
            trailer: 'https://www.youtube.com/embed/LdOM0x0XDMo'
        },
    ];

    const userarray = [
        {
            firstname: "Ad",
            lastname: "Min",
            dob: "01/01/2001",
            status: "ADMIN",
            email: "admin@email",
            password: "adminpassword",
            street: "",
            city: "",
            state: "",
            zip: "",
            cardno: "",
            carddate: "",
            promo: false
        },
        {
            firstname: "Jane",
            lastname: "Doe",
            dob: "01/01/1999",
            status: "ACTIVE",
            email: "jane@mail.com",
            password: "janespass",
            street: "111 street",
            city: "ville",
            state: "NA",
            zip: "10101",
            cardno: "1111222233334444",
            carddate: "01/29",
            promo: true
        }
    ];

    const [updatableUsers, setUpdatableUsers] = useState(userarray)
    const addUpdatableUsers = (email, password) => {
        setUpdatableUsers([...updatableUsers, {
            email: email,
            status: 'INACTIVE',
            password: password
        }])
    }

    const updateUpdatableUsers = (changedUser) => {
        let newarr = updatableUsers.filter((item) => item.email !== changedUser.email)
        newarr = [...newarr, changedUser]
        setUpdatableUsers(newarr)
    }


    const promoarray = [
        {
            code: 'movie',
            percent: 10
        },
        {
            code: 'bigscreen',
            percent: 20
        }
    ];

    const [user, setUser] = useState('');
    const [status, setStatus] = useState('');

    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [childTickets, setChildTickets] = useState(0);
    const [adultTickets, setAdultTickets] = useState(0);
    const [seniorTickets, setSeniorTickets] = useState(0);

    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<HomePage user={user} setUser={setUser} moviearray={moviearray} userarray={userarray} promoarray={promoarray} status={status} />} />
                    <Route exact path="/customerpage" element={<CustomerHomePage user={user} setUser={setUser} moviearray={moviearray} />} />
                    <Route path="/login" element={<LoginPage user={user} setUser={setUser} setStatus={setStatus} />} />
                    <Route path="/search/:id" element={<SearchPage moviearray={moviearray} user={user} setUser={setUser} setSelectedMovie={setSelectedMovie} />} />
                    <Route path="createaccount" element={<CreateAccountPage setUser={setUser} addUpdatableUsers={addUpdatableUsers} />} />
                    <Route path="/confirmwindow" element={<ConfirmationWindow />} />
                    <Route path="/profile" element={<ViewProfile user={user} updatableUsers={updatableUsers} updateUpdatableUsers={updateUpdatableUsers} />} />
                    <Route path="/forgotpassword" element={<ForgotPasswordPage user={user} />} />
                    <Route path="/admin" element={<AdminHomePage user={user} setUser={setUser} moviearray={moviearray} userarray={userarray} promoarray={promoarray} />} />

                    <Route path="/showings" element={<SelectShowing setSelectedDate={setSelectedDate} user={user} setUser={setUser} />} />
                    <Route path="/times" element={<SelectTime setSelectedTime={setSelectedTime} user={user} setUser={setUser} />} />
                    <Route path="/seatselect" element={<SelectSeats setChildTickets={setChildTickets} setAdultTickets={setAdultTickets} setSeniorTickets={setSeniorTickets} user={user} setUser={setUser} />} />
                    <Route path="/checkout" element={<Checkout movie={selectedMovie} date={selectedDate} time={selectedTime} child={childTickets} adult={adultTickets} senior={seniorTickets} />} />
                    <Route path="/orderconfirm" element={<OrderConfirm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
