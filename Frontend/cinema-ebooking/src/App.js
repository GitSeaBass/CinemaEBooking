import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import CustomerHomePage from './components/CustomerHomePage';
import LoginPage from './components/LoginPage';

function App() {
  const[user, setUser] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerHomePage user={user} setUser={setUser}/>} />
          <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
