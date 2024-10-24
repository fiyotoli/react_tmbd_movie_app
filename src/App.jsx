import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar/Navbar';
import NoPage from './pages/NoPage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading period (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      <Navbar />

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }} // Full viewport height to vertically center the spinner
        >
          {/* Loading Spinner */}
          <button className="btn btn-success me-2" type="button" disabled>
            <span className="spinner-grow spinner-grow-lg" aria-hidden="true"></span>
            <span className="visually-hidden" role="status">Loading...</span>
          </button>
          <button className="btn btn-success" type="button" disabled>
            <span className="spinner-grow spinner-grow-lg" aria-hidden="true"></span>
            <span className="visually-hidden" role="status">Loading...</span>
          </button>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
