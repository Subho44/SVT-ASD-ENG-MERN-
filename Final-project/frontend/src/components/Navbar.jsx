import React from 'react'
import { Link,useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const hl = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

    return (
      <>
        <nav className="bg-blue-600  text-white shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
            <Link to="/" className="text-2xl font-bold">
              E-learn
            </Link>

            <div className="md:flex gap-6 font-medium">
              <Link to="/" className="hover:text-yellow-300">
                Register
              </Link>
              <Link to="/login" className="hover:text-yellow-300">
                Login
              </Link>
              {token && (
                <>
                  <Link to="/home" className="hover:text-yellow-300">
                    Home
                  </Link>
                  <Link to="/about" className="hover:text-yellow-300">
                    About
                  </Link>
                  <Link to="/contact" className="hover:text-yellow-300">
                    Contact
                  </Link>
                  <Link to="/service" className="hover:text-yellow-300">
                    Service
                  </Link>
                  <Link to="/add" className="hover:text-yellow-300">
                    Add COURSE
                  </Link>
                  <button onClick={hl}>
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar