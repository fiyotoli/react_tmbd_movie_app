import React from 'react';
import { MdMovie } from 'react-icons/md'; // Import the camera reel icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NavBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const value = event.target.value;
    onSearch(value); // Call the function passed from Home
  };

  return (
    <nav className="navbar navbar-light bg-light fixed-top shadow py-2" style={{ padding: '0 20px' }}>
      {/* Use Link for the logo to connect to home */}
      <Link className="navbar-brand d-flex align-items-center fs-3 fw-bold" to="/">
        <MdMovie className="text-danger me-2" style={{ fontSize: '34px' }} />
        Movie <span className='text-success text-danger'>Home</span>
      </Link>
      
      {/* Toggle button only visible on small screens */}
      <button 
        className="navbar-toggler d-sm-none" // Show only on small screens
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Search input always visible on medium and large screens */}
      <div className="ms-auto col-10 col-md-4 d-none d-md-block"> 
        <form className="d-flex align-items-center">
          <input
            type="text"
            placeholder="Search..."
            className="form-control shadow-inner border border-success rounded" // Add border and rounded styles
            onChange={handleSearch}
          />
        </form>
      </div>

      {/* Collapsible content for small screens */}
      <div className="collapse navbar-collapse d-sm-block d-md-none" id="navbarContent">
        <div className="ms-auto col-10"> {/* Align search input to the right */}
          <form className="d-flex align-items-center">
            <input
              type="text"
              placeholder="Search..."
              className="form-control shadow-inner border border-success rounded" // Add border and rounded styles
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
