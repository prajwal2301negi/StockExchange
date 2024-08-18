import React, { useContext, useEffect } from 'react';
import { Context } from './main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Market from './Pages/Market'
import FrontPage from './Pages/FrontPage';
import AboutPage from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import axios from 'axios'
import Navbar from './components/Headers/Navbar';
import Footer from './components/Headers/Footer';
import PortfolioPage from './Pages/PortfolioPage';

function App() {

  const { isUserAuthenticated, setIsUserAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://stockexchangebackend-258z.onrender.com/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );

        setIsUserAuthenticated(true);
        
        
        setUser(data.user);
        
        
      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };
    fetchUsers();
  }, [isUserAuthenticated, setUser]);


  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/market' element={<Market />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
