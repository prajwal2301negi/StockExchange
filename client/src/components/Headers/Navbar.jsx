import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Context } from '../../main'
import { useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";


function Navbar() {
  const { isUserAuthenticated, setIsUserAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/user/logoutUser",
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsUserAuthenticated(false);
      navigateTo("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToLogin = () => {
    navigateTo("/login");
  };


  return (
    <nav className="bg-[#0E0F14] text-white py-8 px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold">StockExchange</Link>
        <div className="space-x-4">
          <Link to="/market" className="hover:text-pink-500">Market</Link>
         {isUserAuthenticated &&  <Link to="/portfolio" className="hover:text-pink-500">My Portfolio</Link>}
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>

          {isUserAuthenticated ? (
            <button
              className="hover:text-pink-500"
              onClick={handleLogout}
            >

              LOGOUT
            </button>
            
          ) : (
            <button
              className="hover:text-pink-500"
              onClick={goToLogin}
            >

              LOGIN
            </button>
          )}

          {/* <Link to="/profile" className="hover:text-pink-500">Profile</Link> */}
        </div>
      </div>
      {/* <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {sidebarOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
          <Link to="/home" className="hover:text-pink-500">Market</Link>
          {isUserAuthenticated ? (
            <button
              className="hover:text-pink-500"
              onClick={handleLogout}
            >

              LOGOUT
            </button>
          ) : (
            <button
              className="hover:text-pink-500"
              onClick={goToLogin}
            >

              LOGIN
            </button>
          )}


        </div> *
      {/* )} */}
    </nav>
  );
}

export default Navbar;
