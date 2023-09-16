import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CustomerHomePage from './components/CustomerHomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerHomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
