import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar/Navbar';
import NoPage from './pages/NoPage/NoPage';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} /> {/* Pass the onSearch function to Navbar */}

      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
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
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
