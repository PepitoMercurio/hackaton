import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import SignInPage from './Pages/Sign-In';
import SavPage from './Pages/Sav';
import PayemantPage from './Pages/Payement';
import ProfilPage from './Pages/Profil';
import AdminPage from './Pages/Admin';
import APIFetcher from './Compotants/FetchAPI_V/APIFetcher';
import Borne from './Compotants/Borne';
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
        <Route path="/sav" element={<SavPage />} />  
        <Route path="/profil" element={<ProfilPage />} />
        {/* <Route path="/reservation" element={<APIFetcher />} /> */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/:id" element={<Borne />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
