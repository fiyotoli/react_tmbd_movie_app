// src/pages/NoPage.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing an icon from react-icons
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const NoPage = () => {
  const navigate = useNavigate(); // Create a navigate function

  const handleBackHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <FaExclamationTriangle className="display-1 text-danger" />
      <h2 className='display-3 text-danger'>404 Not Found</h2>
      <p className='text-white'>The page you are looking for does not exist.</p>
      <button className="btn btn-success mt-3" onClick={handleBackHome}>
        Back to Home
      </button>
    </div>
  );
};

export default NoPage;
