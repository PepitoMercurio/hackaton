import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import SignInPage from './Pages/Sign-In';
import PayemantPage from './Pages/Payement'
import ProfilPage from './Pages/Profil';
import APIFetcher from './Compotants/FetchAPI_V';
import './App.css';

function App() {
  return (
    <div className='test'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} /> 
        <Route path="/payement" element={<PayemantPage />} />  
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/Reservation" element={<APIFetcher />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
