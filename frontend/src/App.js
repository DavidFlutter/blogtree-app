import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from "react-router-dom";
import AppContext from './context/AppContext';
import { useState } from 'react';

// page imports
import LoginPage from './pages/LoginPage';
import Header from './components/Header';


function App() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <AppContext.Provider value={{
        user, setUser, isMenuOpen, setIsMenuOpen
      }}>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/login' element={
              <LoginPage></LoginPage>
            }></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
