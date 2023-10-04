import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import SignInPage from './Pages/Sign-In';
import PayemantPage from './Pages/Payement'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} /> 
        <Route path="/payement" element={<PayemantPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
